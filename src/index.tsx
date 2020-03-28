import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import Login from "./pages/login";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
