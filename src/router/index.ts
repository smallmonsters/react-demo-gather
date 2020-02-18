import Index from '@/examples/index';
import * as ReactRouterDom from '@/router/react-router-dom/index';
import { RouteConfig } from "react-router-config";

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Index,
    exact: true
  },
  ...ReactRouterDom.default
]

export default routes