import React, {FC} from 'react'
import {HashRouter} from "react-router-dom";
import Nav from "./components/Nav";
import RouterConfig from "./components/RouterConfig";
import {subAppContainerId} from "./utils/initQiankunMainApp";

const App: FC = () => {
  return (
    <HashRouter>
      <Nav/>
      <RouterConfig />
      <div id={subAppContainerId}/>
    </HashRouter>
  );
}

export default App;
