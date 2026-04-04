import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// added manually
import tailwindcss from '@tailwindcss/vite'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), // added manually
  tailwindcss(), cloudflare()],
  build: {
    outDir: "dist",
  },
})