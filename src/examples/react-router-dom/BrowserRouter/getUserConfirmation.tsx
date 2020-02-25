import React, { Component } from 'react';
import { BrowserRouter, Link, Prompt, Route } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import { Title } from '@/assets/style';

export class Index extends Component<RouteConfig, any> {
  constructor(props: RouteConfig) {
    super(props);
    this.state = {
      text: "这是自定义message",
      show:false
    }
    this.confirm = this.confirm.bind(this)
  }

  confirm(message: string) {
    console.log(1);
    this.setState({
      text: message,
      show:!this.state.show
    })
  }
  render() {
    return (
      <div>
        <Title>getUserConfirmation</Title>
        <BrowserRouter>
          <Prompt message="默认行为"></Prompt>
          <ul>
            <li ><Link to="/react-router-dom/browser-router/getUserConfirmation/moren">默认行为:window.confirm</Link></li>
            <Route path="/react-router-dom/browser-router/getUserConfirmation/moren">默认行为</Route>
          </ul>
        </BrowserRouter>
        <BrowserRouter getUserConfirmation={(message, fn) => {
          fn(true);
          this.confirm(message);
        }
        }>
          <Prompt message="自定义message改变了"></Prompt>
          <ul>
            <li><Link to="/react-router-dom/browser-router/getUserConfirmation/zidingyi">自定义</Link></li>
          </ul>
          <Route path="/react-router-dom/browser-router/getUserConfirmation/zidingyi">  <div>{this.state.text}</div></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default Index;
