import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  root: '.',                    // index.html na raiz
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'docs-dist',        // dentro do project root ➜ Netlify publish
    emptyOutDir: true,
    rollupOptions: {
      // Se QUISER marcar vue-router como externo (ex.: docs estáticas):
      // external: ['vue-router'],
    }
  }
})
