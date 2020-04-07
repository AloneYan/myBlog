import React, { useState } from "react";
import BaftEditor from "@components/baftEditor";
import { Form, Input, Select, Modal, Button } from "antd";

import style from "./style.less";
import Iconfont from "@components/myIconfont";
import history from "@util/history";

interface GoMark {}

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
  const modalFinish = (val: any) => {
    console.log(val);
  };
  //获取富文本内容
  const goMark = (val: string) => {
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
          label="书单名称"
          name="markname"
          rules={[{ required: true, message: "请填写文章题目" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="书单作者"
          name="atname"
          rules={[{ required: true, message: "请填写本书作者" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="推荐指数"
          name="number"
          rules={[{ required: true, message: "几颗星" }]}
        >
          <Input type="number" />
        </Form.Item>
        <div className={style.addIcontNext}>
          <Form.Item
            name="marktype"
            label="书单类型"
            rules={[{ required: true, message: "请选择文档类型" }]}
          >
            <Select placeholder="请选择文档类型">
              <Select.Option value="china">China</Select.Option>
              <Select.Option value="usa">U.S.A</Select.Option>
            </Select>
          </Form.Item>
          <div className={style.addIcont} onClick={showModal}>
            <Iconfont type="icon-tianjia" />
          </div>
        </div>
        <BaftEditor submit={goMark} />
      </Form>

      <Modal
        title="添加文档类型"
        okType="primary"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={modalFinish}>
          <Form.Item label="类型名称" name="typename">
            <Input />
          </Form.Item>
          <Form.Item label="类型key" name="key">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
