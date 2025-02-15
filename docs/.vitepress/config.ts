import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ivmp-ui',
  description: 'hello ivmp-ui',
  rewrites: {
    'docs/(.*)': '(.*)',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/intro' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils/' },
    ],

    sidebar: {
      '/components/': [
        {
          text: '按钮',
          link: '/components/button/',
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cth166/thdemo-ui' },
    ],

  },
})
