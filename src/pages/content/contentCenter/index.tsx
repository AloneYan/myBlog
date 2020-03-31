import React from "react";
import { Route, Switch } from "react-router-dom";

import Book from "./book/index";
import Every from "./every/index";
import Mark from "./mark/index";
import Write from "./write/index";

export default () => {
  return (
    <>
      <Switch>
        <Route exact path="/app" component={Mark} />
        <Route exact path="/app/book" component={Book} />
        <Route exact path="/app/every" component={Every} />
        <Route exact path="/app/write" component={Write} />
      </Switch>
    </>
  );
};
