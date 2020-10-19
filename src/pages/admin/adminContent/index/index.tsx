import React from "react";
import { Row, Col, message, Button } from "antd";

import BaftEditor from "@components/baftEditor";
import api from "@api/api-ins";
import history from "@util/history";
import style from "./style.module.less";

export default () => {
  let fwbCont = "";
  const saveEvery = async () => {
    const res: any = await api.mood.save.req({ msg: fwbCont });
    if (res.status === 200) {
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
        <Col span={24}>
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
