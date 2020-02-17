import { lazy } from "react";
const To =lazy(() => import('@/examples/react-router-dom/Link/to'));

const linkRouter = [
  {
    path: "/react-router-dom/link/to",
    exact: true,
    component: To,
  }
]
export default linkRouter;