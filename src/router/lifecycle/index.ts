import GetDerivedStateFromProps from '@/examples/lifecycle/getDerivedStateFromProps';
import shouldComponentUpdate from '@/examples/lifecycle/shouldComponentUpdate';
import renders from '@/examples/lifecycle/renders';
const lifecycleRoute = [
  {
    path: "/lifecycle/getDerivedStateFromProps",
    component: GetDerivedStateFromProps,
    exact: true,
    key: "getDerivedStateFromProps",
    title: "getDerivedStateFromProps",
  },
  {
    path: "/lifecycle/render",
    component: renders,
    exact: true,
    key: "render",
    title: "render",
  },
  {
    path: "/lifecycle/shouldComponentUpdate",
    component: shouldComponentUpdate,
    exact: true,
    key: "shouldComponentUpdate",
    title: "shouldComponentUpdate",
  },
]
export default lifecycleRoute;