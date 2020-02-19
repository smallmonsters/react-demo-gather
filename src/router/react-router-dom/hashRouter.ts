import basename from '@/examples/react-router-dom/HashRouter/basename';
import getUserConfirmation from '@/examples/react-router-dom/HashRouter/getUserConfirmation';

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
  }
]

export default HashRouters;