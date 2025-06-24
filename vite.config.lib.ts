// vite.config.lib.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'           

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')     
    }
  },
  build: {
    lib: {
      entry: 'src/components/index.js',
      name:  'VueAero',
      formats: ['es', 'umd'],
      fileName: (fmt) => `vue-aero.${fmt}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: { globals: { vue: 'Vue' },
      exports: 'named' }
    }
  }
})
