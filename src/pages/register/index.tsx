import React from "react";
import { Form, Input, Button, Radio } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";

import style from "./style.less";

export default () => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
  };

  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_1720468_fgrmlkdgh0h.js"
  });

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onChange = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <div className={style.register}>
      <div className={style.registerContent}>
        <div className={style.loginLogo}>
          <IconFont type="icon-tuzi" />
          欢迎光临
        </div>
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
          <Form.Item
            name={"usrId"}
            label="你の账号"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"usrName"}
            label="你の昵称"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={"sex"} label="你の性别" rules={[{ required: true }]}>
            <Radio.Group onChange={onChange}>
              <Radio value={0}>boy</Radio>
              <Radio value={1}>girl</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="你の暗号"
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="你の邮箱"
            rules={[{ type: "email", message: "这个邮箱好像不行" }]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            注册and登录
          </Button>
        </Form>
        <div className={style.loginFooter}>
          <span className={style.loginFooterBack}>
            <a href="/">回到主站</a>
          </span>
          <span className={style.loginFooterGo}>
            <a href="/login">已有账号去登录 →</a>
          </span>
        </div>
      </div>
    </div>
  );
};
