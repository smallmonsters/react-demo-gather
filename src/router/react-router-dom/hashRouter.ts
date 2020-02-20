import basename from '@/examples/react-router-dom/HashRouter/basename';
import getUserConfirmation from '@/examples/react-router-dom/HashRouter/getUserConfirmation';
import children from '@/examples/react-router-dom/HashRouter/children';

const HashRouters = [
  {
    path: "/react-router-dom/hash-router/basename",
    component: basename,
    exact: true,
    key: "basename",
    title: "basename",
  },
  {
    path: "/react-router-dom/hash-router/getUserConfirmation",
    component: getUserConfirmation,
    exact: true,
    key: "getUserConfirmation",
    title: "getUserConfirmation",
  },
  {
    path: "/react-router-dom/hash-router/children",
    component: children,
    exact: true,
    key: "children",
    title: "children",
  },
]

export default HashRouters;