import React from "react";
import { Route, Switch } from "react-router-dom";

import every from "./every";

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/admin/every" component={every} />
      </Switch>
    </div>
  );
};
