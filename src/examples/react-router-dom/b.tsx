import React, { Component } from 'react';
// import history from 'history/createBrowserHistory'
const history=require("history").createBrowserHistory
class B extends Component {
  constructor(props: any) {
    super(props);
    this.back = this.back.bind(this)
  }
  back() {
    history().goBack()
  }
  render() {
    return (
      <div>
        这是B页面
        <div onClick={this.back} className="link">返回</div>
      </div>
    );
  }
}

export default B;