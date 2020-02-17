import React, { Suspense } from 'react';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import routes from '@/router/index';
import { Menu } from 'antd';
import menuData from '@/utils/menu';
import { Home } from '@/assets/style';
import { renderRoutes } from "react-router-config";


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
      <BrowserRouter>
        <Home>
          <Menu
            style={{ height: "100vh" }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            {recursion}
          </Menu>
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              {renderRoutes(routes)}
            </Switch>
          </Suspense>
        </Home>
      </BrowserRouter>
    </div>
  );
}

export default App;
