import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

function Text(props: any) {
  if (props.text && props.value) return (<div>{props.text}:{props.value}</div>)
  return <div></div>
}

function A(props) {
  let { showLen } = props
  let str:any[] = []
  let { key, hash, pathname, search, state }= useLocation()
  console.log(useLocation());
  console.log(useHistory());
  if (showLen) str.push(key) 
  return (
    <div>
      这是A页面
      {str.map(v => <p >props.location.key:{v}</p>)}
      <Text text="hash" value={hash}></Text>
      <Text text="pathname" value={pathname}></Text>
      <Text text="search" value={search}></Text>
      <Text text="state.text" value={state && state.text}></Text>
    </div>
  );
}
export default A;
