import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig({
  plugins: [vue()],
  root: '.',               // App.vue + router + views
  base: '/',                 // '/vue-aero-library/' se for GH Pages
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  build: { outDir: '../docs-dist' }
})
