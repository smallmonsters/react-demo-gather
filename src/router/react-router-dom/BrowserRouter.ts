import Basename from '@/examples/react-router-dom/BrowserRouter/basename/index';
import getUserConfirmation from '@/examples/react-router-dom/BrowserRouter/getUserConfirmation/index';
import ForceRefresh from '@/examples/react-router-dom/BrowserRouter/forceRefresh/index';
import A from '@/examples/react-router-dom/a';
import B from '@/examples/react-router-dom/b';
const BrowserRouters = [
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
]
export default BrowserRouters