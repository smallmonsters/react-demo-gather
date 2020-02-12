import Index from '../page/index';
import Case from '../page/case';
const routes=[
  {
    path:"/",
    component:Index,
    exact:true
  },
  {
    path:"/case",
    component:Case,
  },
]

export default routes