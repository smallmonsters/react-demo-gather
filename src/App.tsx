import React from 'react';
import { BrowserRouter, Route, Prompt } from 'react-router-dom';
import routes from './router/index';

const App = () => {
  function confirma(message:any, callback:any) {
    console.log(message, callback);
  }
  return (
    <div className="App">
      <BrowserRouter getUserConfirmation={confirma}>
        <Prompt message="hahahahaha">
        </Prompt>
        {routes.map(v => <Route key={v.path} exact={v.exact} path={v.path} component={v.component}></Route>)}
      </BrowserRouter>
    </div>
  );
}

export default App;
