import Index from '@/examples/index';
import Nesting from '@/examples/react-router-dom/Nesting/index';
import A from '@/examples/react-router-dom/a';
import B from '@/examples/react-router-dom/b';
import * as ReactRouterDom from '@/router/react-router-dom/index';
import { RouteConfig } from "react-router-config";

console.log(ReactRouterDom);
const routes: RouteConfig[] = [
  {
    path: "/",
    component: Index,
    exact: true
  },
  {
    path: "/react-router-dom/nesting",
    component: Nesting,
    exact: true,
    routes: [
      {
        path: "/react-router-dom/nesting/a",
        component: A,
        exact: true,
        text: "显示A页面"
      },
      {
        path: "/react-router-dom/nesting/b",
        component: B,
        exact: true,
        text: "显示B页面"
      },
    ]
  },
  ...ReactRouterDom.default
]

export default routes