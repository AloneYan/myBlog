import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Book from "./book/index";
import Every from "./every/index";
import Mark from "./mark/index";
import Write from "./write/index";

export default () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Mark} />
        <Route exact path="/book" component={Book} />
        <Route exact path="/every" component={Every} />
        <Route exact path="/write" component={Write} />
        {/* <Route path="/mark" component={Mark} /> */}
        <Redirect to="/" />
      </Switch>
    </>
  );
};
