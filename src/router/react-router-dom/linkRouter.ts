import { lazy } from "react";
const To = lazy<React.ComponentType>(() => import('@/examples/react-router-dom/Link/to'));
const replace = lazy<React.ComponentType>(() => import('@/examples/react-router-dom/Link/replace'));

const linkRouter = [
  {
    path: "/react-router-dom/link/to",
    exact: true,
    component: To,
    key: "To",
    title: "To",
  },
  {
    path: "/react-router-dom/link/replace",
    exact: true,
    component: replace,
    key: "replace",
    title: "replace",
  },
]
export default linkRouter;