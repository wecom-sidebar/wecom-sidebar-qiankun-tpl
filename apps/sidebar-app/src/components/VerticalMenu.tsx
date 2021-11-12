import React, {FC} from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";

export const base = window.__POWERED_BY_QIANKUN__ ? '/sidebar-app' : '/';

const VerticalMenu: FC = () => {
  const handleClick = () => {};

  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <Menu.Item key="home">
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item key="externalUser">
        <Link to="/external-user">私聊</Link>
      </Menu.Item>
      <Menu.Item key="externalChat">
        <Link to="/external-chat">群聊</Link>
      </Menu.Item>
      <Menu.Item key="action">
        <Link to="/action">操作</Link>
      </Menu.Item>
    </Menu>
  )
}

export default VerticalMenu;
