import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function B() {
  // let { url } = useRouteMatch();
  return (
    <div>
      这是B页面
      <div>
        {/* <Link to={{
          pathname: `/react-router-dom/browser-router/basename/a`
        }}>to A</Link> */}
      </div>
    </div>
  );
}


export default B;
