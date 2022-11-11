export const data = JSON.parse("{\"key\":\"v-b1a62460\",\"path\":\"/book/js%E7%BA%A2%E5%AE%9D%E4%B9%A6.html\",\"title\":\"js 高级程序设计\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1667966127000,\"contributors\":[{\"name\":\"zbyuan\",\"email\":\"1244043663@qq.com\",\"commits\":1}]},\"filePathRelative\":\"book/js红宝书.md\"}")

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
