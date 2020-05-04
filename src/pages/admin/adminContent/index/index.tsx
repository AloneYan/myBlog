import React from "react";
import { Row, Col, message } from "antd";

import BaftEditor from "@components/baftEditor";
import everyApi from "@api/every-api";
import history from "@util/history";
import style from "./style.less";

export default () => {
  const goEvery = async (msg: any) => {
    const res = await everyApi.saveEvery({ msg });
    if (res.data.status === 200) {
      message.success("发布成功");
      history.push("/every");
    }
  };

  return (
    <div className={style.index}>
      <Row>
        <Col span={12}>
          <div className={style.indexEvery}>
            <h3>说点什么？</h3>
            <BaftEditor submit={goEvery} />
          </div>
        </Col>
      </Row>
    </div>
  );
};
