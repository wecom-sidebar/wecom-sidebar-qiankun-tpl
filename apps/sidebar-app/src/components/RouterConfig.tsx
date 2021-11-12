import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import ExternalUser from "../pages/ExternalUser";
import ExternalChat from "../pages/ExternalChat";
import Action from "../pages/Action";

export const routes = [
  {url: '/', label: '首页', page: Home},
  {url: '/external-user', label: '私聊', page: ExternalUser},
  {url: '/external-chat', label: '群聊', page: ExternalChat},
  {url: '/action', label: '操作', page: Action},
]

const RouterConfig: FC = () => {
  return (
    <Routes>
      {routes.map(route => (
        <Route key={route.url} path={route.url} element={<route.page/>}/>
      ))}
    </Routes>
  )
}

export default RouterConfig;
