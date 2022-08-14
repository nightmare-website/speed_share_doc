module.exports = {
  title: "速享手册",
  description: "基于局域网的文件共享终端",
  themeConfig: {
    nav: [
      { text: "用户指南", link: "/guide/about/" },
      { text: "TODO", link: "/guide/todo/" },
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
        "/guide/todo/",
      ],
    },
  },

  base: "/speedshare/docs/",
  displayAllHeaders: false, // 默认值：false
  activeHeaderLinks: true, // 默认值：true
};
