import { lazy } from "react";
const To = lazy<React.ComponentType>(() => import('@/examples/react-router-dom/Link/to'));

const linkRouter = [
  {
    path: "/react-router-dom/link/to",
    exact: true,
    component: To,
    key: "To",
    title: "To",
  }
]
export default linkRouter;