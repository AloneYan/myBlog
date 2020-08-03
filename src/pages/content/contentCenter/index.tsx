import React from "react";
import { Route, Switch } from "react-router-dom";

import Book from "./book/index";
import Every from "./every/index";
import Mark from "./mark/index";
import Write from "./write/index";

export default () => {
  return (
    <Switch>
      <Route path="/book" component={Book} />
      <Route exact path="/every" component={Every} />
      <Route exact path="/write" component={Write} />
      <Mark />
    </Switch>
  );
};
