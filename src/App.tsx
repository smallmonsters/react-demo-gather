import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// import routes from './router/index';
import routes from '@/router/index';
import { Menu } from 'antd';
import menuData from './utils/menu';
import { Home } from './assets/style';

const { SubMenu, Item } = Menu;

const Recursion = (menus: Menus[]) => {
  return (
    menus.map((v) => {
      if (v.children) {
        const recursion = Recursion(v.children)
        return (
          <SubMenu key={v.key} title={v.title}>
            {recursion}
          </SubMenu>
        )
      } else {
        return (
          <Item key={v.key}>
            <Link to={{ pathname: v.path }}>{v.title}</Link>
          </Item>
        )
      }
    })
  )
}


const App = () => {
  const recursion = Recursion(menuData)
  return (
    <div className="App">
      <BrowserRouter >
        <Home>
          <Menu
            style={{ height: "100vh" }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            {recursion}
          </Menu>
          <Switch>
            {routes.map(v => <Route key={v.path} exact={true} path={v.path} component={v.component}></Route>)}
          </Switch>
        </Home>
      </BrowserRouter>
    </div>
  );
}

export default App;
