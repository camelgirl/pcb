# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start local dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint via Next.js
```

No test suite is configured.

## Architecture

Single-page Next.js 14 (App Router) marketing site for Bridge PCB, deployed to Netlify.

**Page structure** — `app/page.tsx` composes all section components in order:
`Nav → Hero → StatsBanner → Services → Capabilities → Industries → Certifications → WhyUs → Testimonial → Contact → Footer`, with `ChatWidget` floating fixed on top.

**Components** — all in `components/`. Each is a self-contained section. `Contact.tsx` and `ChatWidget.tsx` are `"use client"` components with form state.

**Netlify Forms** — Next.js app routes are not static HTML, so Netlify can't auto-detect forms. The workaround is `public/__forms.html`, which contains hidden `<form data-netlify="true">` elements for both forms (`quote` and `chat`). React components POST to `/__forms.html` with `Content-Type: application/x-www-form-urlencoded` and include `form-name` in the body. Any new Netlify form must be registered in both `__forms.html` and the React component.

**Design system** — dark background `#09090b`, copper/gold accent `#d4a853`. Reusable CSS utility classes are defined in `app/globals.css` (`.copper-text`, `.btn-copper`, `.btn-ghost`, `.card-dark`, `.circuit-grid`, `.via-overlay`, `.animate-fade-up-*`). Tailwind extends `colors.copper` (50–900 scale) and `boxShadow` with copper glow variants. No external font packages — fonts use CSS variable fallbacks to system stacks (`--font-display`, `--font-sans`, `--font-mono`).

**Analytics** — Google Analytics 4 (`G-L9QB4WJEMV`) loaded via `next/script` with `strategy="afterInteractive"` in `app/layout.tsx`.
