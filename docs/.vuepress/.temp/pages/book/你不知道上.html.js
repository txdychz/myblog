export const data = JSON.parse("{\"key\":\"v-1bda1444\",\"path\":\"/book/%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E4%B8%8A.html\",\"title\":\"你不知道的 javaScript（中）\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"book/你不知道上.md\"}")

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
