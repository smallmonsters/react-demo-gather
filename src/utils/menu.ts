const menu: Menus[] = [
  {
    key: "react-router-dom",
    title: "react-router-dom",
    children: [
      {
        key: "BrowserRouter",
        title: "BrowserRouter",
        children: [
          {
            key: "basename",
            path: "/react-router-dom/browser-router/basename",
            title: "basename",
          },
          {
            key: "getUserConfirmation",
            path: "/react-router-dom/browser-router/getUserConfirmation",
            title: "getUserConfirmation",
          },
          {
            key: "forceRefresh",
            path: "/react-router-dom/browser-router/forceRefresh",
            title: "forceRefresh",
          },
        ]
      },
      {
        key: "Nesting",
        path: "/react-router-dom/nesting",
        title: "嵌套路由",
      }
    ],
  },
]
export default menu;