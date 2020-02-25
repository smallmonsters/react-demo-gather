import * as Menus from './menus/index';
import reactMenu from './menus/react/index';
import lifecycleMenu from './menus/lifecycle/index';

type menuKey = keyof typeof Menus

let children = (Object.keys(Menus) as Array<menuKey>).map((v: menuKey) => Menus[v])

const menu: Menus[] = [
  {
    key: "react-router-dom",
    title: "react-router-dom",
    children: children,
  },
  reactMenu,
  lifecycleMenu
]
export default menu;