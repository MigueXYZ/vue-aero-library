import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/components/index.js',      // ← exporta todos os componentes
      name: 'VueAeroLibrary',
      fileName: (fmt) => `vue-aero.${fmt}.js`
    },
    rollupOptions: {
      external: ['vue'],                     // não bundle o runtime
      output: { globals: { vue: 'Vue' } }
    }
  }
})
