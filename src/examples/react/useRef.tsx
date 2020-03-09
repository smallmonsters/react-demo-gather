import React, { Component, useRef } from 'react';
import { Title } from '@/assets/style';

function RefHook() {
  const myRef = useRef(<span>22</span>);
  console.log(myRef.current);
  return (
    <div>{myRef.current}</div>
  )
}

export class UseRef extends Component {
  myRef = React.createRef<HTMLElement>()
  constructor(props) {
    super(props)
    console.log(this.myRef.current);
  }
  render() {
    return (
      <div>
        <Title>UseRef</Title>
        <RefHook></RefHook>
        <span ref={this.myRef} onClick={this.print}>111</span>
      </div>
    );
  }
  print = () => {
    console.log(this.myRef.current);
  }
}

export default UseRef;
