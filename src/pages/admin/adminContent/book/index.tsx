import React from "react";
import { Route, Switch } from "react-router-dom";

import List from "./list";
import Add from "./add";

export default () => {
  return (
    <>
      <Switch>
        <Route exact path="/admin/book" component={List} />
        <Route exact path="/admin/book/add" component={Add} />
      </Switch>
    </>
  );
};
