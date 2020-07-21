import React from "react";
import { Row, Col } from "antd";

import ContentLeft from "./contentLeft";
import ContentCenter from "./contentCenter";

function Contents() {
  return (
    <>
      <Row className="content">
        <Col span={6} className="contentLeft">
          <ContentLeft />
        </Col>
        <Col span={18}>
          <ContentCenter />
        </Col>
      </Row>
    </>
  );
}
export default Contents;
