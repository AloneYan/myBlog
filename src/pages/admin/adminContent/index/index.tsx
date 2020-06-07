import React from "react";
import { Row, Col, message, Button } from "antd";

import BaftEditor from "@components/baftEditor";
import everyApi from "@api/every-api";
import history from "@util/history";
import style from "./style.less";

export default () => {
  let fwbCont = "";
  const saveEvery = async () => {
    const res = await everyApi.saveEvery({ msg: fwbCont });
    if (res.data.status === 200) {
      message.success("发布成功");
      history.push("/every");
    }
  };
  //获取富文本内容
  const baftEditorChange = (val: string) => {
    fwbCont = val;
  };

  return (
    <div className={style.index}>
      <Row>
        <Col span={12}>
          <div className={style.indexEvery}>
            <h3>说点什么？</h3>
            <BaftEditor change={baftEditorChange} />
            <div className={style.everyButton}>
              <Button type="primary" htmlType="submit" onClick={saveEvery}>
                发布
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
