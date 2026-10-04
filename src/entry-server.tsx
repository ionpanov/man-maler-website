import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

export function render(url: string) {
  const context: any = {};
  const html = renderToString(
    <HelmetProvider context={context}>
      <StaticRouter location={url}><App /></StaticRouter>
    </HelmetProvider>,
  );
  const { helmet } = context;
  const head = [helmet.title, helmet.meta, helmet.link, helmet.script]
    .map((item) => item.toString()).join("\n");
  return { html, head };
}
