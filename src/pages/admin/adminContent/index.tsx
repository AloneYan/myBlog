import React from "react";
import { Route, Switch } from "react-router-dom";

import Every from "./every";
import Mark from "./mark";

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/admin/every" component={Every} />
      </Switch>
      <Mark />
    </div>
  );
};
