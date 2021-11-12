import React, {FC} from "react";
import {Menu} from "antd";
import {useHistory} from 'react-router-dom'
import {
  FacebookOutlined,
  HomeOutlined,
  WechatOutlined
} from "@ant-design/icons";
import {Link} from "react-router-dom";

const Nav: FC = () => {
  const history = useHistory();

  return (
    <Menu mode="horizontal" defaultSelectedKeys={[history.location.pathname]}>
      <Menu.Item key="/" icon={<HomeOutlined/>}>
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item key="/sidebar-app" icon={<WechatOutlined />}>
        <Link to="/sidebar-app">sidebar-app</Link>
      </Menu.Item>
      <Menu.Item key="/react-app" icon={<FacebookOutlined />}>
        <Link to="/react-app">react-app</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Nav;
