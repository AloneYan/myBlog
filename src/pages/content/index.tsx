import React from "react";
import { Row, Col } from "antd";

import ContentLeft from "./contentLeft";
import ContentCenter from "./contentCenter";
import ContentRight from "./contentRight";

function Contents() {
  return (
    <>
      <Row className="content">
        <Col span={6} className="contentLeft">
          <ContentLeft />
        </Col>
        <Col span={12}>
          <ContentCenter />
        </Col>
        <Col span={6} className="contentRight">
          <ContentRight />
        </Col>
      </Row>
    </>
  );
}
export default Contents;
