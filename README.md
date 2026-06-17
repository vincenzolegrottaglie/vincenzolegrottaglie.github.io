# vincenzolegrottaglie.github.io

Portfolio personale — sito statico costruito con [Astro](https://astro.build) e ospitato su GitHub Pages.

Personal portfolio — static site built with [Astro](https://astro.build) and hosted on GitHub Pages.

---

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) (compilato a build-time, no CDN)
- JavaScript vanilla (theme toggle, mobile menu, smooth scroll)
- TypeScript per i contenuti condivisi

## Funzionalità / Features

- Dark/light mode con toggle (rispetta `prefers-color-scheme`, salva in `localStorage`, no flash)
- Versione italiana (`/`) e inglese (`/en/`) generate da un unico file di contenuti
- Responsive mobile-first (breakpoint custom `xs` a 360px + 640/768/1024px)
- Accessibilità WCAG 2.1 AA (skip link, ARIA, focus-visible, contrasto, navigazione da tastiera)
- Skill tag con link ai siti ufficiali delle tecnologie

---

- Dark/light mode toggle (respects `prefers-color-scheme`, saves to `localStorage`, no flash)
- Italian (`/`) and English (`/en/`) versions generated from a single content file
- Mobile-first responsive (custom `xs` breakpoint at 360px + 640/768/1024px)
- WCAG 2.1 AA accessibility (skip link, ARIA, focus-visible, contrast, keyboard navigation)
- Skill tags linking to official technology websites

## Sviluppo / Development

```bash
npm install        # installa le dipendenze / install dependencies
npm run dev        # dev server su http://localhost:4321
npm run build      # build di produzione in dist/
npm run preview    # anteprima della build di produzione
```

## Struttura / Structure

```
/
├── src/
│   ├── data/
│   │   └── content.ts        # Testi it/en, skill e progetti (single source of truth)
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Main.astro        # Hero, About, Projects, Contact
│   │   ├── SkillTag.astro
│   │   └── ProjectCard.astro
│   ├── layouts/
│   │   └── BaseLayout.astro  # <head>, theme script, header/footer, JS interattivo
│   ├── pages/
│   │   ├── index.astro       # Versione italiana / Italian version
│   │   └── en/index.astro    # English version
│   └── styles/
│       └── global.css        # Direttive Tailwind + stili custom + a11y
├── public/
│   └── assets/               # Favicon, og-image
├── astro.config.mjs
├── tailwind.config.mjs
└── .github/workflows/deploy.yml   # Deploy automatico su GitHub Pages
```

## Deploy

Il deploy è automatico tramite GitHub Actions a ogni push su `main`
(workflow: `.github/workflows/deploy.yml`).

> **Configurazione una tantum:** in *Settings → Pages* del repository,
> impostare **Source** su **GitHub Actions**.

Deploy runs automatically via GitHub Actions on every push to `main`.
One-time setup: in the repo's *Settings → Pages*, set **Source** to **GitHub Actions**.
