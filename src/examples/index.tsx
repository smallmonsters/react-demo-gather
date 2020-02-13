import { Menu, Icon } from 'antd';
import React from 'react';
import menuData from '../utils/menu';

const { SubMenu, Item } = Menu;

class Index extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = (e: any) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        {
          menuData.map(v => {
            return (
              <SubMenu key={v.key} title={v.title}>
                {v.children.map(item => {
                  return (
                    <SubMenu key={item.key} title={item.title}>
                    {item.children.map(m => {
                      return (<Item>{m.title}</Item>)
                    })}
                    </SubMenu>
                  )
                })}
              </SubMenu>
            )
          })
        }
      </Menu>
    )
  }
}
export default Index;