import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import "antd/dist/antd.css";
import "./index.css";
import "./util/main";

import App from "./App";
import Login from "./pages/login";
import Register from "./pages/register";
import Admin from "./admin";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/admin" component={Admin} />
      <Redirect from="/" to="/app" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
