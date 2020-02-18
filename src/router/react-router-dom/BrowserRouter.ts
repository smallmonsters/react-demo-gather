import Basename from '@/examples/react-router-dom/BrowserRouter/basename';
import getUserConfirmation from '@/examples/react-router-dom/BrowserRouter/getUserConfirmation';
import ForceRefresh from '@/examples/react-router-dom/BrowserRouter/forceRefresh';
import keyLength from '@/examples/react-router-dom/BrowserRouter/keyLength';
import children from '@/examples/react-router-dom/BrowserRouter/children';
import A from '@/examples/react-router-dom/a';
import B from '@/examples/react-router-dom/b';
const BrowserRouters = [
  {
    path: "/react-router-dom/browser-router/basename",
    component: Basename,
    exact: true,
    key: "basename",
    title: "basename",
  },
  {
    path: "/react-router-dom/browser-router/forcerefresh",
    component: ForceRefresh,
    exact: true,
    key: "forcerefresh",
    title: "forcerefresh",
  },
  {
    path: "/react-router-dom/browser-router/keyLength",
    component: keyLength,
    exact: true,
    key: "keyLength",
    title: "keyLength",
  },
  {
    path: "/react-router-dom/browser-router/children",
    component: children,
    exact: true,
    key: "children",
    title: "children",
  },
  {
    path: "/react-router-dom/browser-router/getUserConfirmation",
    component: getUserConfirmation,
    exact: true,
    key: "getUserConfirmation",
    title: "getUserConfirmation",
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