import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "antd/dist/antd.css";
import "./index.css";
import "./util/main";
import history from "@util/history";
import store from "./redux/index";

import App from "./App";
import Login from "./pages/login";
import Register from "./pages/register";
import Admin from "./pages/admin";
import CV from "./pages/curriculumVitae";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin" component={Admin} />
        <Route path="/CV" component={CV} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
