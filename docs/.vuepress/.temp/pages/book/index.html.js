export const data = JSON.parse("{\"key\":\"v-145c230d\",\"path\":\"/book/\",\"title\":\"我的阅读时光\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"\",\"slug\":\"\",\"link\":\"#\",\"children\":[]}],\"git\":{\"updatedTime\":1667889006000,\"contributors\":[{\"name\":\"zbyuan\",\"email\":\"1244043663@qq.com\",\"commits\":1}]},\"filePathRelative\":\"book/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
