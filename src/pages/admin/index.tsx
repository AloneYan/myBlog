import React from "react";
import { Layout } from "antd";

import Nav from "./adminNav";
import Contents from "./adminContent";

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
            <Contents />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
