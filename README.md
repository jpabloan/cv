# Juan Pablo Arceo Noriega — CV

A static Spanish CV built with Astro. The Technical memo layout presents verified backend experience, skills, formation and languages. GitHub is the only public professional link.

## Development

Requires Node >=22.12.0 and the existing project dependencies.

```sh
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

Open `http://localhost:4321/cv/`.

## Build

```sh
npm run build
npm run preview
```

The static output is in `dist/`. `astro.config.mjs` retains the GitHub Pages site URL and `/cv` base path.

## Content and design

- `src/data/cv.ts`: verified Spanish CV content, separate from presentation for future translations.
- `src/pages/index.astro`: semantic CV structure.
- `src/styles/global.css`: responsive and print styles.
- `PRODUCT.md`: product scope and privacy constraints.
- `DESIGN.md`: implemented design system.

No client-side JavaScript or external runtime services are required. Do not add personal email addresses, phone numbers, contact placeholders, or unverified claims to public content.
