import { browserRouterMenu,linkMenu,nesting } from './menus/index';
const menu: Menus[] = [
  {
    key: "react-router-dom",
    title: "react-router-dom",
    children: [
      browserRouterMenu,
      linkMenu,
      nesting
    ],
  },
]
export default menu;