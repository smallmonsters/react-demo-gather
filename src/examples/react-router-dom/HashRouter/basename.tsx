import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import A from '../a';

class basename extends Component {

  render() {
    const url="/react-router-dom/hash-router/basename/a"
    return (
      <div>
        <div>
          <HashRouter basename="/test">
            <Link to={url}>使用basename</Link>
            <Route path={url}><A /></Route>
          </HashRouter>
        </div>
        <HashRouter>
          <Link to={url}>不使用basename</Link>
          <Route path={url}><A /></Route>
        </HashRouter>
      </div>
    );
  }
}

export default basename;