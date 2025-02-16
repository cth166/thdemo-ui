import type { Theme } from 'vitepress'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import { infinityTheme, ThemeServiceInit } from 'devui-theme'
import DefaultTheme from 'vitepress/theme'
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DevUI from 'vue-devui'
import '@vitepress-demo-preview/component/dist/style.css'

import 'virtual:uno.css'
import 'virtual:group-icons.css'
import './style.css'
import 'vue-devui/style.css'
import '@devui-design/icons/icomoon/devui-icon.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    app.use(DevUI)
    ThemeServiceInit({ infinityTheme }, 'infinityTheme')
    app.component('demo-preview', AntDesignContainer)
  },
} satisfies Theme
