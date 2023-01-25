export const themeData = JSON.parse("{\"navbar\":[{\"link\":\"/\",\"text\":\"每日总结\"},{\"link\":\"/net\",\"text\":\"计算机网络\"},{\"text\":\"vue笔记\",\"children\":[\"/vue/Vue2.md\",\"/vue/Vue3.md\",\"/vue/Vuex.md\",\"/vue/VueRouter.md\",\"/vue/Pinia.md\"]},{\"link\":\"/react\",\"text\":\"react笔记\"},{\"text\":\"构建工具\",\"children\":[\"/cli/webpack.md\",\"/cli/vite.md\",\"/cli/vue-cli.md\",\"/cli/react-cli.md\"]},{\"link\":\"/ts\",\"text\":\"typeScript\"},{\"text\":\"ECMA\",\"children\":[\"/js/es5.md\",\"/js/es6.md\",\"/js/module.md\"]},{\"text\":\"阅读时光\",\"children\":[\"/book/你不知道上.md\",\"/book/你不知道中.md\",\"/book/你不知道下.md\",\"/book/js红宝书.md\"]},{\"link\":\"/designPattern\",\"text\":\"设计模式\"},{\"link\":\"/cookie\",\"text\":\"知识甜点\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
