import { browserRouterMenu,linkMenu } from './menus/index';
const menu: Menus[] = [
  {
    key: "react-router-dom",
    title: "react-router-dom",
    children: [
      browserRouterMenu,
      linkMenu,
      {
        key: "Nesting",
        path: "/react-router-dom/nesting",
        title: "嵌套路由",
      }
    ],
  },
]
export default menu;