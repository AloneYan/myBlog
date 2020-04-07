import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";

import Nav from "./adminNav";
import Contents from "./adminContent";
import Index from "./adminContent/index/index";

export default () => {
  const { Sider, Content } = Layout;

  return (
    <div>
      <Layout>
        <Sider>
          <Nav />
        </Sider>
        <Layout>
          <Content>
            <Switch>
              <Route exact path="/admin" component={Index} />
              <Contents />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
