import React, { Component, Fragment } from 'react';
import { Title } from '@/assets/style';
import { Input, Button } from 'antd';
import { Container } from '@/components/style';

class ShouldComponentUpdate extends Component {
  state = {
    count: 1
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.count%10===0)return true
    return false
  }
  add=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  render() {
    return (
      <Fragment>
        <Container>
        <Title>基础</Title>
        <Input value={this.state.count} disabled></Input>
        <Button onClick={this.add}>10/+1</Button>
      </Container>
      </Fragment>
    );
  }
}

export default ShouldComponentUpdate;