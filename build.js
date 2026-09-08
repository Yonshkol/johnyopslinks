// Runs on Netlify at deploy time. Bakes the SEO/OpenGraph tags from config.js
// into each page, because Facebook/Slack/iMessage preview bots don't run JS.
// You never need to run this yourself.
const fs = require("fs");
const assert = require("assert");
const c = require("./config.js");

const esc = (v) => String(v || "").replace(/[&<>"]/g, (ch) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));

const base = (c.seo && c.seo.url) || "";

const pages = [
  { file: "index.html", type: "profile", url: base, seo: c.seo },
  {
    file: "services.html", type: "website", url: base ? base + "/services" : "",
    seo: Object.assign({ image: c.seo.image }, (c.services || {}).seo),
  },
];

for (const page of pages) {
  if (!fs.existsSync(page.file)) continue;
  const s = page.seo || {};
  const title = s.title || c.name;
  const desc = s.description || c.tagline;

  const meta = `<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${esc(page.url)}">
<meta property="og:type" content="${page.type}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(page.url)}">
<meta property="og:image" content="${esc(s.image || (c.seo || {}).image)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="${esc(c.theme && c.theme.accent)}">`;

  const out = fs.readFileSync(page.file, "utf8").replace(
    /<!--meta:start-->[\s\S]*?<!--meta:end-->/,
    `<!--meta:start-->\n${meta}\n<!--meta:end-->`
  );

  // self-check: markers survived (so a re-run still works) and tags landed
  assert(out.includes("<!--meta:end-->") && out.includes('property="og:title"'),
    page.file + ": meta injection failed");
  assert(!/<!--meta:start-->\s*<title>Loading/.test(out),
    page.file + ": placeholder still present");

  fs.writeFileSync(page.file, out);
  console.log("baked", page.file, "->", page.url || "(no url set)");
}
