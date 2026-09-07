// Runs on Netlify at deploy time. Bakes the SEO/OpenGraph tags from config.js
// into index.html, because Facebook/Slack/iMessage preview bots don't run JS.
// You never need to run this yourself.
const fs = require("fs");
const c = require("./config.js");
const s = c.seo || {};

const esc = (v) => String(v || "").replace(/[&<>"]/g, (ch) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));

const meta = `<title>${esc(s.title || c.name)}</title>
<meta name="description" content="${esc(s.description || c.tagline)}">
<link rel="canonical" href="${esc(s.url)}">
<meta property="og:type" content="profile">
<meta property="og:title" content="${esc(s.title || c.name)}">
<meta property="og:description" content="${esc(s.description || c.tagline)}">
<meta property="og:url" content="${esc(s.url)}">
<meta property="og:image" content="${esc(s.image)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="${esc(c.theme && c.theme.accent)}">`;

const out = fs.readFileSync("index.html", "utf8").replace(
  /<!--meta:start-->[\s\S]*?<!--meta:end-->/,
  `<!--meta:start-->\n${meta}\n<!--meta:end-->`
);

// self-check: markers survived (so a re-run still works) and tags landed
const assert = require("assert");
assert(out.includes("<!--meta:end-->") && out.includes('property="og:title"'), "meta injection failed");
assert(!/<!--meta:start-->\s*<title>Loading/.test(out), "placeholder still present");

fs.writeFileSync("index.html", out);
console.log("baked meta tags for", s.url || c.name);
