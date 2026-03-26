# Bridge PCB — React/Next site on Netlify

This is a React/Next.js marketing site deployed on Netlify.

## Local preview

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

## Netlify deployment

- Build command: `npm run build`
- Publish directory: `.next`

The contact form in `components/Contact.tsx` uses **Netlify Forms** (`name="quote"` + `data-netlify="true"`).
