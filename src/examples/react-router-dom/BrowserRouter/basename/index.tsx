import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Title } from '@/assets/style';

export class Index extends Component {
  render() {
    return (
      <div>
        <Title>basename</Title>
        <div>
          <BrowserRouter basename="test">
            <Link to="/a">使用basename</Link>
          </BrowserRouter>
        </div>
        <div>
          <BrowserRouter >
            <Link to="/a">不使用basename</Link>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default Index;
