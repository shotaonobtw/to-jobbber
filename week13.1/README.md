# Week 13.1 Counter

POSSE Week 13's Vanilla JavaScript counter, built with Vite.

## Commands

```sh
pnpm create vite week13.1 --template vanilla
cd week13.1
pnpm install
pnpm run dev
pnpm run build
pnpm run preview
```

The counter supports increment, decrement, and reset. Its CSS lives in
`src/style.css` and is imported by `src/main.js`.

## GitHub Pages

`vite.config.js` uses `base: './'` so the built page loads its assets relative
to its own location under the repository's project-site URL. Without this,
Vite-generated asset paths start at the website root and miss the repository
path on GitHub Pages.

GitHub Pages publishes the `Develop` branch root in this repository. The build
output in `dist/` is therefore included so it can be opened at
`/week13.1/dist/` without changing the existing Pages publishing setup.
