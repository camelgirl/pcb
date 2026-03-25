# Shengyi US PCB — Netlify site

This repo is a simple static website designed to deploy on Netlify.

## Local preview

Open `index.html` in a browser, or run a quick local server:

```bash
python3 -m http.server 5173
```

Then visit `http://localhost:5173`.

## Netlify deployment

- Build command: *(none)*
- Publish directory: `.`

The quote form in `index.html` uses **Netlify Forms** (`name="quote"` + `data-netlify="true"`).
