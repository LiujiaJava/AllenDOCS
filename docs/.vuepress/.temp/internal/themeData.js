export const themeData = JSON.parse("{\"logo\":\"/asses/images/logo.jpg\",\"navbar\":[{\"text\":\"Work\",\"children\":[{\"text\":\"橙都科技\",\"link\":\"/ChengDouKeJi/Problem\"},{\"text\":\"其他公司\",\"link\":\"/Other\"}]},{\"text\":\"前端学习\",\"children\":[{\"text\":\"HTML\",\"link\":\"/HTML/标记语言.md\"}]}],\"sidebar\":{\"/ChengDouKeJi/\":[\"Problem\",\"ceshi\"],\"/HTML\":[{\"text\":\"HTML\",\"children\":[\"标记语言\",\"元素\",\"属性\",\"对象模型\",\"语义化\",\"块级元素\",\"内联元素\",\"表单\"]}]},\"plugins\":[{\"name\":\"@vuepress/plugin-search\",\"clientConfigFile\":\"D:/尚硅谷前端/项目源码/vuepress-starter-AllenDOCS/node_modules/.pnpm/@vuepress+plugin-search@2.0.0-beta.62/node_modules/@vuepress/plugin-search/lib/client/config.js\",\"define\":{\"__SEARCH_LOCALES__\":{\"/ChenDouKeJi\":{\"placeholder\":\"Search\"},\"/zh/\":{\"placeholder\":\"搜索\"}},\"__SEARCH_HOT_KEYS__\":[\"s\",\"/\"],\"__SEARCH_MAX_SUGGESTIONS__\":5}},{\"name\":\"@vuepress/plugin-back-to-top\",\"clientConfigFile\":\"D:/尚硅谷前端/项目源码/vuepress-starter-AllenDOCS/node_modules/.pnpm/@vuepress+plugin-back-to-top@2.0.0-beta.62/node_modules/@vuepress/plugin-back-to-top/lib/client/config.js\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
