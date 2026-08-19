# WordCamp Port Harcourt — Docs Site

A [Nextra](https://nextra.site) documentation website built from the content in [WordCamp-Port-Harcourt-Core](https://github.com/nueleluwa/WordCamp-Port-Harcourt-Core).

## Development

```
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating content

Page content lives in `pages/`, mirroring the folder structure of the source docs repository. Each top-level section has:
- `pages/<section>.mdx` — the section landing page
- `pages/<section>/*.mdx` — the individual pages
- `pages/<section>/_meta.json` — sidebar order and titles for that section

When the source documentation changes, update the corresponding `.mdx` file(s) here and redeploy.

## Deployment

Deployed on [Vercel](https://vercel.com). Pushes to `main` trigger an automatic redeploy.
