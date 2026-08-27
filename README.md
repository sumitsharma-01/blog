# The Cars24 Blog — Autonauts (React)

This root folder is the single editable, library-vetted version of the Cars24
Autonauts blog. All chats and all future changes must use this project.

Canonical local link: **http://127.0.0.1:5199/**

## Requirements

- Node.js 18+ and npm

## Develop

```bash
npm install      # first time only
npm run dev      # start/reuse the canonical server (http://127.0.0.1:5199)
```

## Ship to production

```bash
npm run build    # outputs static files to dist/
npm run preview  # preview the production build on the same canonical link
```

Deploy the contents of `dist/` to any static host (Vercel, Netlify, S3/CloudFront,
Nginx, etc.). The build uses `base: './'`, so it works at a domain root or a sub-path.

## Structure

```
src/
  main.jsx                  entry
  App.jsx                   page composition (order matches the DOM the script expects)
  index.css                 all styles (verbatim from the prototype)
  assets/cars24-white.png   logo (bundled + hashed by Vite)
  data/posts.js             story content for the carousel + grid
  components/               Preloader, Nav, Hero, FeaturedStory, Carousel,
                            AllStories, Newsletter, Footer, Icons
  hooks/
    useSiteAnimations.js    the full GSAP/ScrollTrigger/Lenis script, ported
                            verbatim and run once on mount
```

## Editing content

Add or reorder blog cards by editing `src/data/posts.js` — no markup changes needed.

## One-version policy

- Edit only this workspace root; do not create another app folder or version copy.
- Turbo UI is supplied through the installed `@cspl-cars24/*-v2` packages; this
  project has no runtime dependency on a checked-in Turbo UI reference folder.
- Port 5199 is strict: if the app is already running, use the existing link rather
  than starting another server.

## Notes

- GSAP `3.12.5` and Lenis `1.1.14` are pinned to the exact versions the prototype
  used, so motion is unchanged. They're bundled from npm (no runtime CDN dependency).
- The app is intentionally not wrapped in `<React.StrictMode>` — see the comment
  in `src/main.jsx`.
