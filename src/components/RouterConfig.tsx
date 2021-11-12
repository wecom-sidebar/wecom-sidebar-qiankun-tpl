import React, {FC} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";

const RouterConfig: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
    </Switch>
  )
}

export default RouterConfig;
