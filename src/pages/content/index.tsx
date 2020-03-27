import React from "react";
import { Row, Col } from "antd";

import ContentLeft from "./contentLeft";
import ContentRight from "./contentRight";

function Contents() {
  return (
    <>
      <Row className="content">
        <Col span={16}>
          <ContentLeft />
        </Col>
        <Col span={8} className="contentRight">
          <ContentRight />
        </Col>
      </Row>
    </>
  );
}
export default Contents;
