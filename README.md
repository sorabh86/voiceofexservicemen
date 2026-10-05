# Voice of Ex-Servicemen React SPA

The website is a React single-page application built with Vite and React Router. All app source and npm configuration live at the repository root; static images and vendor files are in `public/`.

Navigation uses clean browser routes. When deployed to GitHub Pages, the app is available under `/voiceofexservicemen/`, with pages such as `/voiceofexservicemen/policy` and `/voiceofexservicemen/news`. The GitHub Pages `404.html` fallback preserves direct links and refreshes on nested routes.

## Development

Run from the repository root. Vite serves the app under the same project path used by GitHub Pages:

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The deployable static site is generated in `dist/`. Publish the contents of that folder to the `gh-pages` branch or configure GitHub Pages to deploy it from your chosen workflow.
