import * as menuRrd from './menus/react-router-dom/index';
import reactMenu from './menus/react/index';
import lifecycleMenu from './menus/lifecycle/index';


let children = (menus) => {
  return (Object.keys(menus) as Array<any>).map(v => menuRrd[v])
}


const menus = [
  {
    key: "react-router-dom",
    title: "react-router-dom",
    isMenu: true,
    children: children(menuRrd)
  },
  reactMenu,
  lifecycleMenu
]

export default menus;