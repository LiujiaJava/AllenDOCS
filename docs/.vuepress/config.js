import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
module.exports = {
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
  },
  //站点配置 - 标题配置
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    
    '/': {
      lang: 'zh-CN',
      title: 'Allen帮助档',
      description: 'Vue,java,前端，后端帮助文档',
    },
  },
   //seo
   head: [
    ['meta', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'Allen', content: 'Allen帮助档' }],
    ['meta', { name: 'keywords', content: 'Vue,java,前端，后端帮助文档' }],
    // ...其他标签
  ],

  theme: defaultTheme({
    
    //图片左边log
    logo: '/asses/images/logo.jpg',
    navbar: [

      // NavbarItem
      {
        text: 'Work',
        children: [
          {
            text: '橙都科技',
            link: '/ChengDouKeJi/Problem',
            // 该元素将一直处于激活状态
            // activeMatch: '/',
          },
          {
            text: '其他公司',
            link: '/Other',
            // 该元素将一直处于激活状态
            // activeMatch: '/',
          },


        ]
      },

      {
        text: '前端学习',
        // 该元素将一直处于激活状态
        // activeMatch: '/',
        children: [
          {
            text: "HTML",
            link: "/HTML/标记语言.md"
          }
        ]
      },
    ],

    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: {
      "/ChengDouKeJi/": [
        'Problem',
        'ceshi'
      ],
      "/HTML": [
        {
          text:"HTML",
          children:[
            '标记语言',
            '元素',
            '属性',
            '对象模型',
            '语义化',
            '块级元素',
            '内联元素',
            '表单'
          ]
        },
        
      ]
    },

    //插件
    plugins: [
      searchPlugin({
        locales: {
          '/ChenDouKeJi': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },

        maxSuggestions: 5


      }),

      // 跳到顶部
      backToTopPlugin(),
    ],



  }),



}

