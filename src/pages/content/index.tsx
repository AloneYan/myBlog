import React from "react";
import { Row, Col } from "antd";

import ContentLeft from "./contentLeft";
import ContentCenter from "./contentCenter";

function Contents() {
  return (
    <>
      <Row className="content">
        <Col span={7} className="contentLeft">
          <ContentLeft />
        </Col>
        <Col span={17}>
          <ContentCenter />
        </Col>
      </Row>
    </>
  );
}
export default Contents;
