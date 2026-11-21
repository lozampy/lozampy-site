import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * Vercel build: the site itself is static, so this config leaves out the
 * Cloudflare Worker plugin used for `bun run dev` / `bun run build`.
 */
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: { outDir: 'dist/vercel' },
})
