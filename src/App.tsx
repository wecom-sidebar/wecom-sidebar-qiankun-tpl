import React, {FC} from 'react'
import {HashRouter} from "react-router-dom";
import Nav from "./components/Nav";
import RouterConfig from "./components/RouterConfig";
import {registerMicroApps, start} from "qiankun";

// 注册并启动微前端
registerMicroApps([
  {
    name: 'react-app',
    entry: '//localhost:3001',
    container: '#sub-app-container',
    activeRule: '/#/react-app',
  },
]);

start();

const App: FC = () => {
  return (
    <HashRouter>
      <Nav/>
      <RouterConfig />
      <div id="sub-app-container"/>
    </HashRouter>
  );
}

export default App;
