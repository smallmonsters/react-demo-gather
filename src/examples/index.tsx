import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Index extends Component {
  render() {
    return (
      <div>
        首页
        <div>
          <Link to={{
            pathname: "/case"
          }}>案例页</Link>
        </div>
      </div>
    );
  }
}

export default Index;
