import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import ExternalUser from "../pages/ExternalUser";
import ExternalChat from "../pages/ExternalChat";
import Action from "../pages/Action";

export const routes = [
  {url: '/', label: '首页', key: 'home', page: Home},
  {url: '/external-user', label: '私聊', key: 'external-user', page: ExternalUser},
  {url: '/external-chat', label: '群聊', key: 'external-chat', page: ExternalChat},
  {url: '/action', label: '操作', key: 'action', page: Action},
]

const RouterConfig: FC = () => {
  return (
    <Routes>
      {routes.map(route => (
        <Route key={route.key} path={route.url} element={<route.page/>}/>
      ))}
    </Routes>
  )
}

export default RouterConfig;
