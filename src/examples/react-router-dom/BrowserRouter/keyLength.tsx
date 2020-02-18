import React, { Component, lazy } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
const A = lazy(() => import("../a"))

class keyLength extends Component<RouteConfig> {
  render() {
    const url = "/react-router-dom/browser-router/key-length/a"
    return (
      <div>
        <BrowserRouter keyLength={12}>
          <Link to={url}>显示A页面(点击key值会变化)</Link>
          <Route path={url}><A showLen={true} /></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default keyLength;