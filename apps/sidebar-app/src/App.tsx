import React from 'react';
import {BrowserRouter} from "react-router-dom";
import VerticalMenu from "./components/VerticalMenu";
import RouterConfig from "./components/RouterConfig";
import styles from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <VerticalMenu />
        <RouterConfig />
      </div>
    </BrowserRouter>
  );
}

export default App;
