import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import A from '@/examples/react-router-dom/a';
import { Summary } from '@/assets/style';

export class Index extends Component {
  render() {
    return (
      <div>
        <BrowserRouter forceRefresh={true}>
          <ul>
            <li><Link to="react-router-dom/browser-router/forceRefresh/a">to A</Link></li>
          </ul>
          <Route path="react-router-dom/browser-router/forceRefresh/a"><A /></Route>
        </BrowserRouter>
        <BrowserRouter>
          <ul>
            <li><Link to="/react-router-dom">to A</Link></li>
          </ul>
          <Route path="react-router-dom" exact={true}><A /></Route>
        </BrowserRouter>
        <Summary>笔记:Link组件的to属性值有无/,对应的url不一致，既"/path"与"path"是不同的</Summary>
        <BrowserRouter>
          <ul>
            <li><Link to="/path">有/的Link</Link></li>
            <li><Link to="paths">无/的Link</Link></li>
            <Route path="path" exact={true}><A /></Route>
          </ul>
        </BrowserRouter>
      </div>
    );
  }
}

export default Index;
