import Refs from '@/examples/react/refs';
import UseRef from '@/examples/react/useRef';
const reactRoute = [
  {
    path: "/react/refss",
    component: Refs,
    exact: true,
    key: "Refs",
    title: "Refs",
  },
  {
    path: "/react/useRef",
    component: UseRef,
    exact: true,
    key: "useRef",
    title: "useRef",
  }
]
export default reactRoute;