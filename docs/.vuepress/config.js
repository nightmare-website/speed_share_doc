module.exports = {
  title: "魇·无界投屏手册",
  description: "承蒙时光不弃，感谢一切给予",
  themeConfig: {
    nav: [
      { text: "用户指南", link: "/guide/about/" },
      { text: "官方主页", link: "http://nightmare.fun/screen/" },
      { text: "下载", link: "https://nightmare.fun/YanTool/resources/Remote/" },
      { text: "开发者Github", link: "https://github.com/mengyanshou/" },
      { text: "开发者的博客", link: "http://nightmare.fun/blog" },
    ],
    sidebar: {
      sidebarDepth: 3,
      "/about/": ["" /* /foo/ */],
      "/guide/": [
        "/guide/about/",
        "/guide/connect/",
        "/guide/good/",
        "/guide/bugs/",
      ],
    },
  },

  base: "/screen/docs/",
  displayAllHeaders: false, // 默认值：false
  activeHeaderLinks: true, // 默认值：true
};
