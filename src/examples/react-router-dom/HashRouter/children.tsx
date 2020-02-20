import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';


class Hello extends React.Component {
  render() {
    return <div>我也是children</div>;
  }
}
class children extends Component {
  render() {
    return (
      <div>
        <HashRouter children={React.createElement('li', { id: 'li1' }, '我是children')} />
        <HashRouter children={React.createElement(Hello)} />
      </div>
    );
  }
}

export default children;