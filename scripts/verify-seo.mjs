import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { JSDOM } from "jsdom";

const sitemap = await readFile("dist/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url);
const titles = new Set();
for (const url of urls) {
  const { pathname } = new URL(url);
  const file = pathname === "/" ? "dist/index.html" : `dist${pathname}/index.html`;
  const document = new JSDOM(await readFile(file, "utf8")).window.document;
  assert.equal(document.querySelectorAll("title").length, 1, `${url}: single title`);
  assert.ok(document.title.length > 0, `${url}: title`);
  assert.ok(!titles.has(document.title), `${url}: unique title`);
  titles.add(document.title);
  assert.equal(document.querySelectorAll('link[rel="canonical"]').length, 1, `${url}: single canonical`);
  assert.equal(document.querySelector('link[rel="canonical"]').href, url);
  assert.ok(document.querySelector('meta[name="description"]')?.content, `${url}: description`);
  const heading = document.querySelector("#root h1");
  assert.ok(heading?.textContent.trim(), `${url}: rendered heading`);
  for (let node = heading; node; node = node.parentElement) {
    assert.notEqual(node.style.opacity, "0", `${url}: visible without JavaScript`);
  }
  assert.ok(document.querySelector('#root a[href="/kontakt"]'), `${url}: contact link`);
  for (const element of document.querySelectorAll('[src^="/assets/"], [href^="/assets/"]')) {
    await access(`dist${element.getAttribute("src") || element.getAttribute("href")}`);
  }
  for (const script of document.querySelectorAll('script[type="application/ld+json"]')) {
    JSON.parse(script.textContent);
  }
}
const missing = new JSDOM(await readFile("dist/404.html", "utf8")).window.document;
assert.equal(missing.querySelector('meta[name="robots"]').content, "noindex");
assert.equal(missing.querySelector("h1").textContent, "404");
console.log(`Verified metadata, visible content, assets and contact links for ${urls.length} pages; verified 404 noindex.`);
