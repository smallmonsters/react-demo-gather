import React, { Component } from 'react';
import { Title } from '@/assets/style';

class TextInput extends Component<any, any> {
  state = {
    value: this.props.value
  }
  // 派生state不是用改函数，父组件改变value子组件并不会更新
  static getDerivedStateFromProps(nextProps, preState) {
    return { value: nextProps.value }
  }
  changeValue = (e) => {
    this.setState(
      { value: e.target.value }
    )
  }
  render() {
    return (
      <input type="text" onChange={this.changeValue} value={this.state.value}></input>
    )
  }
}

class GetDerivedStateFromProps extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 1,
      num: 0
    }
  }
  static getDerivedStateFromProps(nextProps: any, preState: any) {
    return { num: preState.num + 1 }
  }
  add = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <Title>基础案例</Title>
        <p>getDerivedStateFromProps执行次数：{this.state.num}</p>
        <p>props或state发生变化时getDerivedStateFromProps就会执行</p>
        <button onClick={this.add}>执行次数+1</button>
        <Title>派生state</Title>
        <TextInput value={this.state.num}></TextInput>
        <button onClick={this.add}>+1</button>
      </div>
    );
  }
}

export default GetDerivedStateFromProps;
