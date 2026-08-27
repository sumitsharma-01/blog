import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Cars24 Blog — Vite + React.
// `base: '/'` gives absolute asset URLs. The app uses client-side routing
// (pushState to /blog/:id); with the Vercel rewrite that serves index.html on
// deep links, relative asset paths would resolve against the nested route and
// 404, so the base must be absolute.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: { dedupe: ['react', 'react-dom'] },
  // Every chat uses the same project and URL. strictPort prevents Vite from
  // silently creating a second link when the canonical server is already open.
  server: {
    host: '127.0.0.1',
    port: 5199,
    strictPort: true,
  },
  preview: {
    host: '127.0.0.1',
    port: 5199,
    strictPort: true,
  },
  // Only scan the blog entry. The workspace also contains the Turbo UI source
  // reference, whose Storybook/catalog demos intentionally have extra deps.
  optimizeDeps: {
    entries: ['index.html'],
  },
})
