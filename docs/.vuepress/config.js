import { defaultTheme } from 'vuepress'
import {searchPlugin} from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
module.exports = {
  //标题配置
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.

    '/': {
      lang: 'zh-CN',
      title: '个人页面',
      description: 'Vue 驱动的静态网站生成器',
    },
  },


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
        children:[
          {
            text: "HTML",
            link:"/HTML/标记语言.md"
          }
        ]
      },
    ],

    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar:{
      "/ChengDouKeJi/":[
        'Problem',
        'ceshi'
      ],
      "/HTML":[
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

        maxSuggestions:5

        
      }),

    // 跳到顶部
    backToTopPlugin(),
    ],

   
    
  }),



}   

