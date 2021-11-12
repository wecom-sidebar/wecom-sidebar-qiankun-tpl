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
import {microAppStateActions} from "../lib/utils/initQiankunMainApp";
import {jsSdk} from "../index";

const Nav: FC = () => {
  const onClickItem = () => {
    microAppStateActions.setGlobalState({
      jsSdk,
    })
  }
  return (
    <Menu mode="horizontal">
      <Menu.Item onClick={onClickItem} key="home" icon={<HomeOutlined/>}>
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item onClick={onClickItem} key="actions" icon={<SettingOutlined/>}>
        <Link to="/actions">发消息</Link>
      </Menu.Item>
      <Menu.Item onClick={onClickItem} key="externalUser" icon={<UserOutlined />}>
        <Link to="/external-user">人</Link>
      </Menu.Item>
      <Menu.Item onClick={onClickItem} key="externalChat" icon={<UsergroupAddOutlined />}>
        <Link to="/external-chat">群</Link>
      </Menu.Item>
      <Menu.Item onClick={onClickItem} key="reactApp" icon={<FacebookOutlined />}>
        <Link to="/react-app">react-app</Link>
      </Menu.Item>
      <Menu.Item onClick={onClickItem} key="sidebarApp" icon={<WechatOutlined />}>
        <Link to="/sidebar-app">sidebar-app</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Nav;
