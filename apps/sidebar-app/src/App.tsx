import React from 'react';
import {HashRouter} from "react-router-dom";
import VerticalMenu from "./components/VerticalMenu";
import RouterConfig from "./components/RouterConfig";
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <HashRouter basename={window.__POWERED_BY_QIANKUN__ ? '/sidebar-app' : '/'}>
        <VerticalMenu />
        <main className={styles.main}>
          <RouterConfig />
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
