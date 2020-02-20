import React, { Component } from 'react';
import { BrowserRouter, Link, Route,HashRouter } from 'react-router-dom';
import A from '../a';
import { Title } from '@/assets/style';

export class To extends Component {
  render() {
    const route = {
      pathname: "/react-router-dom/link/to/object",
      search: "?name=Bob",
      hash: "#the-hash",
      state: { text: "true" }
    }
    return (
      <div>
        <Title>对比有无"/"</Title>
        <BrowserRouter >
          <ul><li><Link to="react-router-dom/link/to/a">to:/(x),path:/(v)</Link></li></ul>
          <Route path="/react-router-dom/link/react-router-dom/link/to/a"><A /></Route>
        </BrowserRouter >
        <p>to="path/a",path前没有/这种情况路由,url变化规则：最后一个/route会
            替换成to的值，既url/route=>url/path/a=>url/path/path/a，</p>
        <BrowserRouter >
          <ul><li><Link to="react-router-dom/link/to/a">to:/(x),path:/(x)</Link></li></ul>
          <Route path="react-router-dom/link/to/a"><A /></Route>
        </BrowserRouter>
        <BrowserRouter >
          <ul><li><Link to="/react-router-dom/link/to/a">to:/(v),path:/(x)</Link></li></ul>
          <Route path="react-router-dom/link/to/a"><A /></Route>
        </BrowserRouter>
        <p>Route:path的值未写对，不会正确显示</p>
        <BrowserRouter >
          <ul><li><Link to="/react-router-dom/link/to/a">to:/(v),path:/(v)</Link></li></ul>
          <Route path="/react-router-dom/link/to/a"><A /></Route>
        </BrowserRouter>
        <p>Link的to属性和Route的path属性前一定要加/</p>
        <Title>String</Title>
        <BrowserRouter >
          <ul><li><Link to="/react-router-dom/link/to/search?name=Mike#age">string</Link></li></ul>
          <Route path="/react-router-dom/link/to/search"><A /></Route>
        </BrowserRouter>
        <Title>Object</Title>
        <BrowserRouter >
          <ul><li><Link to={route}>Object</Link></li></ul>
          <Route path="/react-router-dom/link/to/object"><A /></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default To;
