import browserRouter from './BrowserRouter';
import linkRouter from './linkRouter';
import nesting from './nesting';
import hashRouter from './hashRouter';


export default [
  ...linkRouter,
  ...browserRouter,
  ...nesting,
  ...hashRouter
]
