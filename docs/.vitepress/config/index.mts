import type { UserConfig } from 'vitepress'
import { getViteConfig } from './vite'

function setupConfig(configEnv) {
  const config: UserConfig<any> = {
    title: 'ivmp-ui',
    description: 'hello ivmp-ui',
    rewrites: {
      'docs/(.*)': '/(.*)',
      'docs/components/': 'docs/components/button',
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
    vite: getViteConfig(configEnv),
  }
  return config
}

export default setupConfig
