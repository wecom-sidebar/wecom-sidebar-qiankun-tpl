import React, {CSSProperties, FC} from "react";
import {Menu} from "antd";
import {Link, useLocation} from "react-router-dom";
import styles from './styles.module.scss';
import {routes} from "../RouterConfig";

const menuStyle: CSSProperties = {
  width: 80,
  height: window.__POWERED_BY_QIANKUN__ ? 'calc(100vh - 45px)' : '100vh',
}

const VerticalMenu: FC = () => {
  const location = useLocation();

  return (
    <Menu
      style={menuStyle}
      className={styles.menu}
      defaultSelectedKeys={[location.pathname]}
      mode="vertical"
    >
      {routes.map(route => (
        <Menu.Item className={styles.item} key={route.url}>
          <Link to={route.url}>{route.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default VerticalMenu;
