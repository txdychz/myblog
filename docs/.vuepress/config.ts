import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '张宝源的学习日记 ！',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    navbar: [
      {
        link: '/',
        text: '每日总结',
      },
      {
        link: '/net',
        text: '计算机网络',
      },
      {
        text: 'vue笔记',
        children: [
          '/vue/Vue2.md',
          '/vue/Vue3.md',
          '/vue/Vuex.md',
          '/vue/VueRouter.md',
          '/vue/Pinia.md',
        ],
      },
      {
        link: '/react',
        text: 'react笔记',
      },

      {
        text: '构建工具',
        children: [
          '/cli/webpack.md',
          '/cli/vite.md',
          '/cli/vue-cli.md',
          '/cli/react-cli.md',
        ],
      },
      {
        link: '/ts',
        text: 'typeScript',
      },
      {
        text: 'ECMA',
        children: ['/js/es5.md', '/js/es6.md', '/js/module.md'],
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
      {
        link: '/designPattern',
        text: '设计模式',
      },
      {
        link:'/cookie',
        text:'知识甜点'
      }
    ],
  }),
})
