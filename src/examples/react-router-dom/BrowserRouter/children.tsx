import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';


class Hello extends React.Component {
  render() {
    return <div>我也是children</div>;
  }
}
class children extends Component {
  render() {
    return (
      <div>
        <BrowserRouter children={React.createElement('li', { id: 'li1' }, '我是children')} />
        <BrowserRouter children={React.createElement(Hello)} />
      </div>
    );
  }
}

export default children;