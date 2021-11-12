import React, {FC} from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import styles from './styles.module.scss';
import {routes} from "../RouterConfig";

const VerticalMenu: FC = () => {
  const handleClick = () => {};

  return (
    <Menu
      className={styles.menu}
      onClick={handleClick}
      style={{ width: 80 }}
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
