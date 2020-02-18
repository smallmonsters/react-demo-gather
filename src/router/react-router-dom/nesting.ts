import Nesting from '@/examples/react-router-dom/Nesting/index';
import A from '@/examples/react-router-dom/a';
import B from '@/examples/react-router-dom/b';
const nesting = [
  {
    path: "/react-router-dom/nesting",
    component: Nesting,
    exact: true,
    key: "Nesting",
    title: "嵌套路由",
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
export default nesting;