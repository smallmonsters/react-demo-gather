import * as Menus from './menus/index';

type menuKey = keyof typeof Menus

let children = (Object.keys(Menus) as Array<menuKey>).map((v: menuKey) => Menus[v])

const menu: Menus[] = [
  {
    key: "react-router-dom",
    title: "react-router-dom",
    children: children,
  },
]
export default menu;