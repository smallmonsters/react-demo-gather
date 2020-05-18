import React, { Component, useRef, useState, useEffect, Fragment } from 'react';
import { Title } from '@/assets/style';

function RefHook() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const changeValue = (e) => {
    console.log(myRef1);
    setCount(count + 1)
    setInputValue(e.target.value)
  }
  const myRef = useRef(<input name="custom" value={inputValue} onChange={changeValue} />);
  const myRef1 = useRef(0);
  useEffect(() => {
    myRef1.current = count
  });
  return (
    <Fragment>
      <div onClick={changeValue}>{myRef.current}{count}</div>
    </Fragment>
  )
}

export class UseRef extends Component {
  myRef = React.createRef<HTMLElement>()
  constructor(props) {
    super(props)
    console.log(this.myRef);
  }
  render() {
    return (
      <div>
        <Title>UseRef</Title>
        <RefHook></RefHook>
        <span ref={this.myRef} onClick={this.print}>createRef</span>
      </div>
    );
  }
  print = () => {
    console.log(this.myRef);
  }
}

export default UseRef;
