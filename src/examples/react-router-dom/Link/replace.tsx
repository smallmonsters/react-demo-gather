import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import B from '../b';

export class Replace extends Component {
  render() {
    const url = "/react-router-dom/link/replace/a"
    return (
      <div>
        <div>
          <BrowserRouter >
            <Link replace to={url}>使用replace</Link>
            <Route path={url}><B /></Route>
          </BrowserRouter>
        </div>
        <BrowserRouter >
          <Link to={url}>不使用replace</Link>
          <Route path={url}><B /></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default Replace;
