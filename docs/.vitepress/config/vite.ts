import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import { DevUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'

export function getViteConfig(): any {
  return {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    plugins: [
      vueJsx(),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        resolvers: [
          DevUiResolver(),
        ],
      }),

      UnoCSS(),
      groupIconVitePlugin(),
    ],
  }
}
