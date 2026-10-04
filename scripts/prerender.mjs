import { readFile, writeFile, mkdir } from "node:fs/promises";
import { render } from "../dist-ssr/entry-server.js";

const origin = "https://manmaler.dk";
const sitemap = await readFile("public/sitemap.xml", "utf8");
// Retain the empty browser shell outside the published directory so rerunning
// this script cannot duplicate metadata or prerendered content.
const template = await readFile("dist-ssr/template.html", "utf8").catch(async () => {
  const shell = await readFile("dist/index.html", "utf8");
  await writeFile("dist-ssr/template.html", shell);
  return shell;
});
const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, value]) => {
  const url = new URL(value);
  if (url.origin !== origin) throw new Error(`Unexpected sitemap origin: ${value}`);
  return url.pathname;
});
if (!routes.includes("/") || new Set(routes).size !== routes.length) {
  throw new Error("Sitemap must include the homepage and unique routes");
}

// Use the same React components and Helmet metadata as the interactive website.
for (const route of [...routes, "/404"]) {
  const { html, head } = render(route);
  if (!html.includes("<h1") || html.includes("Oops! Page not found") && route !== "/404") {
    throw new Error(`Missing page content for ${route}`);
  }
  const metadata = route === "/404"
    ? '<title data-rh="true">Side ikke fundet | MAN MALER</title><meta data-rh="true" name="robots" content="noindex" />'
    : head;
  if (route !== "/404" && !metadata.includes(`href="${origin}${route === "/" ? "/" : route}"`)) {
    throw new Error(`Missing self canonical for ${route}`);
  }
  const output = template.replace(/<title>[\s\S]*?<\/title>/, "")
    .replace("</head>", `${metadata}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const directory = route === "/" ? "dist" : `dist${route}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, output);
  if (route === "/404") await writeFile("dist/404.html", output);
}
console.log(`Prerendered ${routes.length} sitemap pages and the 404 page.`);
