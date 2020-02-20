import browserRouter from './BrowserRouter';
import linkRouter from './linkRouter';
import nesting from './nesting';
import hashRouter from './hashRouter';
import navlinkRouter from './navlinkrouter';


export default [
  ...linkRouter,
  ...browserRouter,
  ...nesting,
  ...hashRouter,
  ...navlinkRouter
]
