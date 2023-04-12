export const data = JSON.parse("{\"key\":\"v-5599ea6d\",\"path\":\"/cli/vite.html\",\"title\":\"Vite\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1674672301000,\"contributors\":[{\"name\":\"zbyuan\",\"email\":\"1244043663@qq.com\",\"commits\":1}]},\"filePathRelative\":\"cli/vite.md\"}")

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
