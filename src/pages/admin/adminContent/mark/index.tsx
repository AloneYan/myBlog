import React from "react";
import { Route, Switch } from "react-router-dom";

import List from "./list";
import Add from "./add";

export default () => {
  return (
    <>
      <Switch>
        <Route exact path="/admin/mark" component={List} />
        <Route exact path="/admin/mark/add" component={Add} />
      </Switch>
    </>
  );
};
