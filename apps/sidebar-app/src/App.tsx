import React from 'react';
import {HashRouter} from "react-router-dom";
import VerticalMenu from "./components/VerticalMenu";
import RouterConfig from "./components/RouterConfig";
import styles from './App.module.scss';

function App() {
  return (
    <HashRouter basename={window.__POWERED_BY_QIANKUN__ ? '/sidebar-app' : '/'}>
      <div className={styles.app}>
        <VerticalMenu />
        <RouterConfig />
      </div>
    </HashRouter>
  );
}

export default App;
