import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './router/index';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter >
        {routes.map(v => <Route key={v.path} exact={v.exact} path={v.path} component={v.component}></Route>)}
        <Switch>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
