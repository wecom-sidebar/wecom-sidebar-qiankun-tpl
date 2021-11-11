import React, {FC} from "react";
import {Menu} from "antd";
import {
  FacebookOutlined,
  HomeOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  WechatOutlined
} from "@ant-design/icons";
import {Link} from "react-router-dom";

const Nav: FC = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined/>}>
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item key="actions" icon={<SettingOutlined/>}>
        <Link to="/actions">发消息</Link>
      </Menu.Item>
      <Menu.Item key="externalUser" icon={<UserOutlined />}>
        <Link to="/external-user">人</Link>
      </Menu.Item>
      <Menu.Item key="externalChat" icon={<UsergroupAddOutlined />}>
        <Link to="/external-chat">群</Link>
      </Menu.Item>
      <Menu.Item key="reactApp" icon={<FacebookOutlined />}>
        <Link to="/react-app">react-app</Link>
      </Menu.Item>
      <Menu.Item key="sidebarApp" icon={<WechatOutlined />}>
        <Link to="/sidebar-app">sidebar-app</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Nav;
