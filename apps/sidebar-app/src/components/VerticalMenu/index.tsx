import React, {CSSProperties, FC} from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import styles from './styles.module.scss';
import {routes} from "../RouterConfig";

const menuStyle: CSSProperties = {
  width: 80,
  height: window.__POWERED_BY_QIANKUN__ ? 'calc(100vh - 45px)' : '100vh',
}

const VerticalMenu: FC = () => {
  return (
    <Menu
      style={menuStyle}
      className={styles.menu}
      defaultSelectedKeys={['home']}
      mode="vertical"
    >
      {routes.map(route => (
        <Menu.Item className={styles.item} key={route.key}>
          <Link to={route.url}>{route.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default VerticalMenu;
