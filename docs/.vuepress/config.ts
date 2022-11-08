import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '张宝源的学习日记 ！',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    navbar: [
      {
        link: '/',
        text: '阅读笔记',
      },
      {
        link: '/vue',
        text: 'vue笔记',
      },
      {
        link: '/react',
        text: 'react笔记',
      },
      {
        link: '/note',
        text: '技术随笔',
      },
      {
        link: '/webpack',
        text: 'webpack笔记',
      },
    ],
  }),
})
