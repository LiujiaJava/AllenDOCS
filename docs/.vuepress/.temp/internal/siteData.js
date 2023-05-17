export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"meta\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}],[\"meta\",{\"name\":\"Allen\",\"content\":\"Allen帮助档\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"Vue,java,前端，后端帮助文档\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"Allen帮助档\",\"description\":\"Vue,java,前端，后端帮助文档\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
