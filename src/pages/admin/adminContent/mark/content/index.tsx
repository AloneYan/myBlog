import React, { useState } from "react";
import BaftEditor from "@components/baftEditor";
import { Form, Input, Select } from "antd";
const { Option } = Select;

export default () => {
  const [fwbCont, setFwbCont] = useState("");

  const goMark = (val: any) => {
    setFwbCont(val);
  };

  const onFinish = (val: any) => {
    const param = val;
    param.content = fwbCont;
    console.log(param);
  };
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 }
  };
  return (
    <div>
      <Form {...layout} onFinish={onFinish}>
        <Form.Item
          label="文档题目"
          name="markname"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="marktype"
          label="文档类型"
          rules={[{ required: true, message: "请选择文档类型" }]}
        >
          <Select placeholder="请选择文档类型">
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
        </Form.Item>
        <BaftEditor submit={goMark} />
      </Form>
    </div>
  );
};
