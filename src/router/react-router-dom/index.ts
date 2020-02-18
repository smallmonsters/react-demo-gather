import BrowserRouter from './BrowserRouter';
import linkRouter from './linkRouter';
import nesting from './nesting';

export default [
  ...linkRouter,
  ...BrowserRouter,
  ...nesting
]
