# Your link hub

One page. All your links. Free hosting. Nothing to install.

You edit **one file** — `config.js` — and that's the whole job.

---

## Put it online (about 5 minutes)

### 1. Make your own copy

At the top right of this page on GitHub, click **Fork**. That makes a copy of
this site under your own account. Everything below happens in *your* copy.

### 2. Publish it

1. Go to [netlify.com](https://netlify.com) and sign up with your GitHub account (free).
2. Click **Add new site → Import an existing project → GitHub**.
3. Pick the repository you just forked.
4. Don't change any of the settings it shows you. Click **Deploy**.

A minute later Netlify gives you a web address like
`https://cheerful-otter-1a2b3c.netlify.app`. That's your site — it's live.

You can rename it (Site configuration → Change site name), or point your own
domain at it (Domain management → Add a domain).

### 3. Make it yours

Back on GitHub, in your copy, click **`config.js`**, then the **pencil icon** to
edit it. Change the name, the tagline, the links. Click **Commit changes**.

Netlify notices and rebuilds your site automatically. Wait ~30 seconds, refresh
your site, done. Repeat forever — that's the whole workflow.

> If something looks broken after an edit, you probably deleted a quote `"` or a
> comma `,`. Every line inside `config.js` needs its quotes and its trailing comma.

---

## What you can change in `config.js`

| Setting | What it does |
| --- | --- |
| `name`, `handle`, `tagline` | The text at the top. `handle` is the small mono line (e.g. `@johny_ops`); set it to `""` to hide. |
| `avatar` | Your photo. Upload a `.jpg` to this repo and put its filename here, or paste a full `https://` link. Leave `""` for no photo. |
| `theme.accent` / `accentDark` | Button and highlight color, for light mode and dark mode. The page follows the visitor's phone setting automatically. |
| `links` | Your buttons. Copy an existing block to add one. Reorder them by moving blocks up or down — top of the list is top of the page. `description` is optional. Add `featured: true` to make one a big filled button (use it once). |
| `services` | The whole `/services` page: headline, the three pillars, your price tiers, the three steps, and the closing block. Prices are plain text — write `$450`, `from $450`, whatever you want. |
| `dashboard.csv` | The published-to-web URL of your Google Sheet. See below. |
| `links[].icon` | Type one of: `youtube`, `linkedin`, `instagram`, `tiktok`, `substack`, `calendar`, `briefcase`, `mail`, `link`. You get the proper logo in the proper brand color. Anything else is treated as an emoji or an image link. |
| `emailEndpoint` | Where signups go — see below. Leave `""` and the signup box disappears. |
| `goatcounter` | Click tracking — see below. Leave `""` for none. |
| `seo` | Your page title, description, and the picture that shows up when someone shares your link in a message. **Set `seo.url` to your real site address once you have it.** |

---

## Collecting emails

The signup box sends the address to whatever URL you put in `emailEndpoint`.
Anything that accepts a form works. The easiest free one:

1. Sign up at [formspree.io](https://formspree.io).
2. Create a form. It gives you a URL like `https://formspree.io/f/abcdwxyz`.
3. Paste that into `emailEndpoint` in `config.js`.

Buttondown, Kit/ConvertKit, and Mailchimp all give you a similar URL. If your
provider needs a different setup, they'll say so in their docs — the box sends
`{"email": "..."}` as JSON.

Leave `emailEndpoint` as `""` and the whole box is hidden. No box, no problem.

---

## Seeing which links get tapped

1. Sign up at [goatcounter.com](https://www.goatcounter.com) (free for personal sites).
2. It asks you to pick a code, e.g. `ada`. Put just that word in `goatcounter`.
3. Visit your dashboard at `https://ada.goatcounter.com`.

Every page visit shows up as `/`, and every link tap shows up as
`/click/Newsletter`, `/click/GitHub`, and so on. No cookies, no consent banner,
no account needed for your visitors.

Leave `goatcounter` as `""` and nothing is tracked at all.

---

## The three pages

| Address | What it is |
| --- | --- |
| `/` | Your link hub. The one you put in every bio. |
| `/services` | What you offer and what it costs. Everything comes from the `services` block in `config.js`. |
| `/dashboard` | Your numbers. Not linked from anywhere and marked no-index, but it isn't secret — anyone with the address can open it. |

## The dashboard

It reads a Google Sheet you fill in once a week. No login, no API keys, nothing to expire.

1. Make a Google Sheet. Row 1 must have exactly these column names:
   `week, yt_views, yt_subs, shorts_views, tiktok_views, ig_views, calls_booked, clients, mrr`
2. One row per week. `week` is the Monday's date, like `2026-09-07`. Blank cells are fine.
3. **File → Share → Publish to web** → pick the sheet → **Comma-separated values (.csv)** → **Publish**.
4. Copy that URL into `dashboard.csv` in `config.js`.

`sample.csv` in this folder shows the shape. Until you paste a real URL, `/dashboard`
just shows these instructions.

Anyone with the link can read those numbers. If that bothers you, don't publish the
Sheet — the dashboard is the only thing that breaks.

## The files (you can ignore all of these)

- `config.js` — **the only file you edit**
- `index.html`, `services.html`, `dashboard.html` — the three pages
- `style.css` — shared look and feel
- `build.js` — runs on Netlify; copies your titles and preview images into the pages so
  link previews work in Slack, iMessage, WhatsApp etc.
- `netlify.toml` — tells Netlify what to do
- `sample.csv` — an example of the dashboard sheet

---

## Working on it on your own computer (optional)

You don't need this. But if you want to preview before publishing:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Any tiny web server works — opening
`index.html` directly with `file://` will not, because browsers block `config.js`
from loading that way.
