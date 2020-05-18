import Index from '@/examples/index';
import { RouteConfig } from "react-router-config";
import menus from "@/utils/menu"

const getRouters = (menu) => {
  return menu.map(v => {
    if (v.children) return getRouters(v.children).flat()
    if (!v.isMenu) return v
  }).filter(Boolean).flat()
}
const routes: RouteConfig[] = [
  {
    path: "/",
    component: Index,
    exact: true
  },
  ...getRouters(menus),
]
export default routes