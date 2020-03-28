import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import App from "./App";
import Login from "./pages/login";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/login" component={Login} />
      <Redirect from="/" to="/app" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
