import React, { Component } from 'react';
import { BrowserRouter, Link, Prompt } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import { Title } from '@/assets/style';

export class Index extends Component<RouteConfig, any> {
  constructor(props: RouteConfig) {
    super(props);
    this.state = {
      text: "这是自定义message"
    }

  }

  confirm(message: string) {
    this.setState({
      text: message
    })
  }
  render() {
    return (
      <div>
        <Title>getUserConfirmation</Title>
        <BrowserRouter>
          <Prompt message="默认行为"></Prompt>
          <ul>
            <li ><Link to="/moren">默认行为:window.confirm</Link></li>
          </ul>
        </BrowserRouter>
        <BrowserRouter getUserConfirmation={this.confirm.bind(this)}>
          <Prompt message="自定义message改变了"></Prompt>
          <ul>
            <li><Link to="/zidingyi">自定义</Link></li>
          </ul>
          <div>{this.state.text}</div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Index;
