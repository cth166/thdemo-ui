import { defineConfig } from 'vite'
import VitePluginVitepressDemo from 'vite-plugin-vitepress-demo'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VitePluginVitepressDemo({
      // glob: ['**/examples/**/*.vue'],
    }),
  ],
})
