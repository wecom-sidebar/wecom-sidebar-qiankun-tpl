import React, {FC} from "react";
import {Menu} from "antd";
import {useHistory} from 'react-router-dom'
import {Link} from "react-router-dom";

const Nav: FC = () => {
  const history = useHistory();

  return (
    <Menu mode="horizontal" defaultSelectedKeys={[history.location.pathname]}>
      <Menu.Item key="/">
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item key="/sidebar-app">
        <Link to="/sidebar-app">sidebar-app</Link>
      </Menu.Item>
      <Menu.Item key="/api-test">
        <Link to="/api-test">api-test</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Nav;
