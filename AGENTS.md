# Canonical project rules

This workspace has one editable Cars24 Autonauts blog project and one canonical
local URL. Follow these rules in every chat opened for this folder.

## Never delete GitHub References

- Never delete, move, rename, replace, or clean up any file or folder inside
  `/Users/a37331/Desktop/Blog Pages/GitHub References`.
- `turbo-ui-master-V2 repo.zip` is the latest authoritative library snapshot,
  not an old version. Preserve it and its extracted working folder permanently.
- A request to delete an "old version" never authorizes deleting anything in
  `GitHub References`. Ask for an explicit itemized confirmation if deletion is
  ever requested there.
- Do not use `rm`, cleanup scripts, or archive replacement operations anywhere
  under `GitHub References`.

## Single source of truth

- Edit the application only at `/Users/a37331/Desktop/Blog Pages`.
- The live source is `src/`, `public/`, `index.html`, `package.json`, and
  `vite.config.js` at the workspace root.
- The library-backed blog is the canonical application. It uses Turbo UI
  components such as `@cspl/blog-card`, not the standalone `.g-card` shell.
- `GitHub References/turbo-ui-master-V2 repo.zip` and its extracted
  `GitHub References/turbo-ui-master` working folder are the latest library
  source and must always be retained.
- `GitHub References/turbo-ui-rc_new` is an additional reference and must also
  be retained.
- Never recreate or use the standalone `src/components/fresh` implementation.
- Do not create versioned copies such as `old`, `new`, `final`, `v2`, or `v3`.
  Apply every requested change to the root source above.
- `dist/` and `Autonauts-Blog-Final.zip` are generated outputs, not editable
  source. Rebuild them from the root source when the user explicitly needs an
  export.

## One local link

- The canonical preview is always `http://127.0.0.1:5199/`.
- Reuse the server on port 5199 when it is already running. Never start this
  project on 5173, 5174, 5175, 5180, or another automatically selected port.
- Start the canonical live-updating server with `npm run dev` from the workspace
  root. Vite is configured with `strictPort`, so a duplicate server fails instead
  of creating a different link.
- After source changes, verify the root app and run `npm run build`. Share only
  the canonical URL unless the user explicitly requests a different environment.
