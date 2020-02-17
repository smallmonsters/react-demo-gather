import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import A from '@/examples/react-router-dom/a';

export class Index extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ul>
            <li><Link to="/react-router-dom/browser-router/forceRefresh/a">to A(forceRefresh:false)</Link></li>
          </ul>
          <Route path="/react-router-dom/browser-router/forceRefresh/a"><A /></Route>
        </BrowserRouter>
        <BrowserRouter forceRefresh={true}>
          <ul>
            <li><Link to="/react-router-dom/browser-router/forceRefresh/a">to A(forceRefresh:true)</Link></li>
          </ul>
          <Route path="/react-router-dom/browser-router/forceRefresh/a" exact={true}><A /></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default Index;
