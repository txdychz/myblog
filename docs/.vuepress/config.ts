import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '张宝源的学习日记 ！',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    navbar: [
      {
        link: '/',
        text: '计算机网络',
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
      {
        link: '/js',
        text: 'ECMA',
      },
      {
        text: '阅读时光',
        children: [
          '/book/你不知道上.md',
          '/book/你不知道中.md',
          '/book/你不知道下.md',
          '/book/js红宝书.md',
        ],
      },
    ],
  }),
})
