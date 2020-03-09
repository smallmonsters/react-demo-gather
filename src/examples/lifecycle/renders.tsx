import React, { Component, Fragment } from 'react';
import { Title } from '@/assets/style';
import ReactDOM from 'react-dom';



class Texts1 extends Component {
  render() {
    return <div>这是一个React元素</div>
  }
}
class Texts2 extends Component<any> {
  render() {
    switch (this.props.type) {
      case 1:
        return <div>{["返", <b key={1}>回</b>, "数", "组",]}（有div包裹）</div>
      case 2:
        return <Fragment><span>返回</span><span>Fragment</span></Fragment>
      default:
        return ["返", "回", "数", "组", "文本"]
    }
  }
}
class Texts3 extends Component<any> {
  div = document.createElement('div')
  componentDidMount() {
    const id = document.getElementById('div');
    id?.appendChild(this.div);
  }
  render() {
    // 第二个参数要是一个已在DOM中的Element
    return ReactDOM.createPortal(this.props.children, this.div)
  }
}
class Texts4 extends Component {
  render() {
    return true
  }
}
class Texts5 extends Component {
  render() {
    return "text"
  }
}



class Renders extends Component {
  state = {
    test: 1
  }
  componentDidMount() {
    console.log(2);
    // 触发render
    this.setState({
      test: 2
    })
    console.log(1);
  }
  render() {
    console.log(3);
    return (
      <div>
        <Title>返回React元素</Title>
        <Texts1></Texts1>
        <Title>返回数组、fragments</Title>
        <Texts2 type={0}></Texts2>
        <Texts2 type={1}></Texts2>
        <Texts2 type={2}></Texts2>
        <Title>返回Portals</Title>
        <Texts3><ul><li>list1</li><li>list2</li></ul></Texts3>
        <div id="div"></div>
        <Title>string</Title>
        <Texts5></Texts5>
        <Title>null</Title>
        <Texts4></Texts4>
        <p>无论是true、false、null什么都不渲染</p>
        <Title>componentDidMount</Title>
        {this.state.test}
      </div>
    );
  }
}

export default Renders;