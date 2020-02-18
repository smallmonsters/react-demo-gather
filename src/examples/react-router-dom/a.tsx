import React from 'react';
import { useLocation } from 'react-router-dom';

function A(props: any) {
  let { showLen } = props
  let str = []
  let key=useLocation().key
  if (showLen) str.push(key)
  return (
    <div>
      这是A页面
      {str.map(v => <p >props.location.key:{v}</p>)}
    </div>
  );
}
export default A;
