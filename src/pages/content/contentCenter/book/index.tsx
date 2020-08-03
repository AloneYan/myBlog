import React from "react";
import { Route, Switch } from "react-router-dom";

import List from "./list";
import Content from "./content";

export default () => {
  return (
    <Switch>
      <Route exact path="/book" component={List} />
      <Route exact path="/book/content" component={Content} />
    </Switch>
  );
};
