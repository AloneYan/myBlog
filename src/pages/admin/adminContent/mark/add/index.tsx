import React, { useState } from "react";
import BaftEditor from "@components/baftEditor";
import { Form, Input, Select, Modal } from "antd";

import style from "./style.less";
import Iconfont from "@components/myIconfont";
import history from "@util/history";

export default () => {
  const [fwbCont, setFwbCont] = useState("");
  const [visible, setVisible] = useState(false);
  //添加文档类型对话框
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handleOk = () => {};

  //获取富文本内容
  const goMark = (val: any) => {
    setFwbCont(val);
  };
  //发布
  const onFinish = (val: any) => {
    const param = val;
    param.content = fwbCont;
    console.log(param);
  };
  //返回列表跳转
  const addReturn = () => {
    history.push("/admin/mark");
  };
  return (
    <div className={style.add}>
      <div className={style.addReturn} onClick={addReturn}>
        <Iconfont type="icon-tuichu" />
      </div>
      <Form onFinish={onFinish}>
        <Form.Item
          label="文档题目"
          name="markname"
          rules={[{ required: true, message: "请填写文章题目" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="marktype"
          label="文档类型"
          rules={[{ required: true, message: "请选择文档类型" }]}
        >
          <Select placeholder="请选择文档类型">
            <Select.Option value="china">China</Select.Option>
          </Select>
          <div className={style.addIcont} onClick={showModal}>
            <Iconfont type="icon-tianjia" />
          </div>
        </Form.Item>
        <BaftEditor submit={goMark} />
      </Form>

      <Modal
        title="添加文档类型"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};
