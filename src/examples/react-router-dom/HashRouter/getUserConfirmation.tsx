import React, { Component } from 'react';
import { Link, Prompt, HashRouter, Route } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import { Title } from '@/assets/style';

export class Index extends Component<RouteConfig, any> {
  constructor(props: RouteConfig) {
    super(props);
    this.state = {
      text: "这是自定义message"
    }
    this.confirm = this.confirm.bind(this)
  }
  confirm(message: string, fn: any) {
    console.log(1);
    this.setState({
      text: message
    })
    fn(true);
  }
  render() {
    return (
      <div>
        <Title>getUserConfirmation</Title>
        <HashRouter getUserConfirmation={this.confirm}>
          <Prompt message="自定义message改变了"></Prompt>
          <ul>
            <li><Link to="/zidingyi">自定义</Link></li>
          </ul>
          <Route path="/zidingyi"><div>{this.state.text}</div></Route>
        </HashRouter>
        <HashRouter>
          <Prompt message="默认行为"></Prompt>
          <ul>
            <li ><Link to="/moren">默认行为:window.confirm</Link></li>
          </ul>
          <Route path="/moren">默认行为</Route>
        </HashRouter>
      </div>
    );
  }
}

export default Index;
