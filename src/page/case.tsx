import React from 'react';
import { Link } from 'react-router-dom';

export class Case extends React.Component {
  render() {
    return (
      <div>
        案例页
       <div>
          <Link to={{
            pathname: "/"
          }}>
            首页
        </Link>
        </div>
      </div>
    );
  }
}

export default Case;
