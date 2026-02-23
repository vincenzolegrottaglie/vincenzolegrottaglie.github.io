# vincenzolegrottaglie.github.io

Portfolio personale — sito statico ospitato su GitHub Pages.

Personal portfolio — static site hosted on GitHub Pages.

---

## Stack

- HTML semantico / Semantic HTML
- [Tailwind CSS](https://tailwindcss.com) (CDN)
- JavaScript vanilla
- Zero build step

## Funzionalità / Features

- Dark/light mode con toggle (rispetta `prefers-color-scheme`, salva in `localStorage`)
- Versione italiana (`/`) e inglese (`/en/`)
- Responsive mobile-first (768px, 1024px)
- Accessibilità WCAG 2.1 AA (skip link, ARIA, focus-visible, contrasto, navigazione da tastiera)
- Skill tag con link ai siti ufficiali delle tecnologie

---

- Dark/light mode toggle (respects `prefers-color-scheme`, saves to `localStorage`)
- Italian (`/`) and English (`/en/`) versions
- Mobile-first responsive (768px, 1024px)
- WCAG 2.1 AA accessibility (skip link, ARIA, focus-visible, contrast, keyboard navigation)
- Skill tags linking to official technology websites

## Struttura / Structure

```
/
├── index.html          # Versione italiana / Italian version
├── en/
│   └── index.html      # English version
├── css/
│   └── style.css       # Custom styles + a11y
├── js/
│   └── main.js         # Theme toggle, mobile menu, smooth scroll
└── assets/             # Favicon, images (TBD)
```

