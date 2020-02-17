import React, { Component } from 'react';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import { renderRoutes, RouteConfig } from 'react-router-config';

class Index extends Component<RouteConfig> {
  render() {
    const { routes } = this.props.route
    return (
      <div>
        <BrowserRouter>
          <ul>
            {routes.map((item: any) => <li key={item.path}><Link to={item.path}>{item.text}</Link></li>)}
          </ul>
          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Index;