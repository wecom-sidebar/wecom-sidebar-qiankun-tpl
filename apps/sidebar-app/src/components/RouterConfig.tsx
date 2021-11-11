import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import ExternalUser from "../pages/ExternalUser";
import ExternalChat from "../pages/ExternalChat";
import Action from "../pages/Action";

const RouterConfig: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/external-user" element={<ExternalUser/>}/>
      <Route path="/external-chat" element={<ExternalChat/>}/>
      <Route path="/action" element={<Action/>}/>
    </Routes>
  )
}

export default RouterConfig;
