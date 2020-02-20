import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import A from '../a';
import B from '../b';

export class navlink extends Component {
  render() {
    const url = "/react-router-dom/navlink/navlink"
    return (
      <div>
        <div>
          <BrowserRouter>
            <ul>
              <li>
                <NavLink to={`${url}/a`} replace>激活active</NavLink>
              </li>
              <li>
                <NavLink to={`${url}/b/test`} activeStyle={{
                  fontWeight: "bold",
                }} activeClassName="actives">激活activeClassName</NavLink>
              </li>
              <li>
                <NavLink to={`${url}/b`} activeClassName="actives">exact:false</NavLink>
              </li>
              <li>
                <NavLink to={`${url}/b`} exact activeClassName="actives">exact:true</NavLink>
              </li>
            </ul>
            <Route path={`${url}/a`}><A /></Route>
            <Route path={`${url}/b/test`} exact><B /></Route>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default navlink;
