import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

import style from "./style.less";
import IconFont from "@components/myIconfont";

export default () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  // 标签布局
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
  };

  return (
    <div className={style.login}>
      <div className={style.loginContent}>
        <div className={style.loginLogo}>
          <IconFont type="icon-tuzi" />
          欢迎光临
        </div>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="你の账号"
            name="username"
            rules={[{ required: true, message: "这里不能不填！" }]}
          >
            <Input placeholder="输入账号/邮箱登录吧" />
          </Form.Item>
          <Form.Item
            label="你の暗号"
            name="password"
            rules={[{ required: true, message: "忘了报上暗号啦！" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>点这里我就会记住你～</Checkbox>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form>
        <div className={style.loginFooter}>
          <span className={style.loginFooterBack}>
            <a href="/">回到主站</a>
          </span>
          <span className={style.loginFooterGo}>
            <a href="/">忘记密码? </a>
            <a href="/register"> 没有账号</a>
          </span>
        </div>
      </div>
    </div>
  );
};
