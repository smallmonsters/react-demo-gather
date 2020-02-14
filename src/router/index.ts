import Index from '../examples/index';
import Basename from '../examples/react-router-dom/BrowserRouter/basename/index';
import getUserConfirmation from '../examples/react-router-dom/BrowserRouter/getUserConfirmation/index';
import Nesting from '../examples/react-router-dom/Nesting/index';

const routes=[
  {
    path:"/",
    component:Index,
    exact:true
  },
  {
    path:"/react-router-dom/browser-router/basename",
    component:Basename,
    exact:true
  },
  {
    path:"/react-router-dom/browser-router/getUserConfirmation",
    component:getUserConfirmation,
    exact:true
  },
  {
    path:"/react-router-dom/nesting",
    component:Nesting,
    exact:true
  },
]

export default routes