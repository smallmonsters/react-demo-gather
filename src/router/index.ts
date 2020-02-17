import Index from '@/examples/index';
import Basename from '@/examples/react-router-dom/BrowserRouter/basename/index';
import getUserConfirmation from '@/examples/react-router-dom/BrowserRouter/getUserConfirmation/index';
import Nesting from '@/examples/react-router-dom/Nesting/index';
import ForceRefresh from '@/examples/react-router-dom/BrowserRouter/forceRefresh/index';
import A from '@/examples/react-router-dom/a';
import B from '@/examples/react-router-dom/b';
import { RouteConfig } from "react-router-config";


const routes: RouteConfig[] = [
  {
    path: "/",
    component: Index,
    exact: true
  },
  {
    path: "/react-router-dom/browser-router/basename",
    component: Basename,
    exact: true
  },
  {
    path: "/react-router-dom/browser-router/forcerefresh",
    component: ForceRefresh,
    exact: true,
  },
  {
    path: "/react-router-dom/browser-router/getUserConfirmation",
    component: getUserConfirmation,
    exact: true,
    routes: [
      {
        path: "/react-router-dom/browser-router/getUserConfirmation/a",
        component: A,
        exact: true,
        text: "默认行为"
      },
      {
        path: "/react-router-dom/browser-router/getUserConfirmation/b",
        component: B,
        exact: true,
        text: "弹出alert"
      },
    ]
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

]

export default routes