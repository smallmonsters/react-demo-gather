import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';



function A() {
  let { path, url } = useRouteMatch();
  console.log(path, url)
  return (
    <div>
      这是A页面
      {/* <Link to={{
        pathname: `/react-router-dom/browser-router/basename/b`
      }}>
        to B
        </Link> */}
    </div>
  );
}
export default A;
