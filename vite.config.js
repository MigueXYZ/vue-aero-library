import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build:{
    lib: {
      entry: 'src/index.js',
      name : 'VueAero',
      fileName: (format) => `vue-aero.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],          // não empacotar o runtime do Vue
      output: {
        globals: { vue: 'Vue' }   // UMD precisa disto
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
