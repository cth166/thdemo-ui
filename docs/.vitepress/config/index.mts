import type { UserConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { getViteConfig } from './vite'

function setupConfig() {
  const config: UserConfig<any> = {
    title: 'ivmp-ui',
    description: 'hello ivmp-ui',
    rewrites: {
      'docs/(.*)': '/(.*)',
    },
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: '首页', link: '/' },
        { text: '介绍', link: '/intro' },
        { text: '组件', link: '/components/button', activeMatch: '/components/' },
        { text: '工具', link: '/utils/' },
      ],

      sidebar: {
        '/components/': [
          {
            base: '/components/',
            items: [
              { text: '按钮', link: 'button' },
            ],
          },
        ],
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/cth166/thdemo-ui' },
      ],
    },
    vite: getViteConfig(),
    markdown: {
      config(md) {
        md.use(containerPreview)
        md.use(componentPreview)
      },
    },
  }
  return config
}

export default setupConfig
