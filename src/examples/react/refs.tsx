import React, { Component, createRef, RefObject } from 'react';
import { Title } from '@/assets/style';


const FancyButton: any = React.forwardRef((props: any, refs: any) => {
  return (
    <div>
      <p>{props.text}</p>
      <button ref={refs} className="FancyButton">{props.children}</button>
    </div>
  )
})

class Refs extends Component<any, any> {
  myRef: RefObject<HTMLDivElement>;
  textInput: any;
  textInput1: any = null;
  constructor(props: any) {
    super(props);
    this.state = {
      classes: "",
      ref: createRef()
    }
    this.textInput = React.createRef();
    this.myRef = createRef();
    this.show = this.show.bind(this)
  }
  setTextInputRef = (element: any) => {
    this.textInput1 = element;
  };
  focusTextInput1 = () => {
    this.textInput1.focus()
  }
  focusTextInput = () => {
    this.textInput.current.focus()
  }
  show() {
    this.setState({
      classes: this.myRef.current?.className
    })
  }
  render() {
    return (
      <div>
        <Title>创建 Refs</Title>
        <div ref={this.myRef} className="pointer" onClick={this.show}>点击显示改div的class
          <p>{this.state.classes}</p>
        </div>
        <Title>一个dome</Title>
        <div>
          <input ref={this.textInput} type="text"></input>
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
        <Title>回调 Refs</Title>
        <div>
          <input ref={this.setTextInputRef} type="text"></input>
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput1}
          />
        </div>
        <Title>Refs 转发</Title>
        <FancyButton ref={this.state.ref} text="我是父组件的值">Click me!</FancyButton>;
        <Title>注意</Title>
        <p>React 会在组件挂载时给 current 属性传入 DOM 元素，并在组件卸载时传入 null 值。ref 会在 componentDidMount 或 componentDidUpdate 生命周期钩子触发前更新。</p>
        <p><b>你不能在函数组件上使用 ref 属性</b>，因为它们没有实例：</p>
      </div>
    );
  }

}

export default Refs;