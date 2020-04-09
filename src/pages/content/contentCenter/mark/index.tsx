import React from "react";
import { Route, Switch } from "react-router-dom";

import List from "./list";
import Content from "./content";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={List} />
      <Route exact path="/content" component={Content} />
    </Switch>
  );
};
