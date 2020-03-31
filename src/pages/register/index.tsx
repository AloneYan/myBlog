import React from "react";
import { Form, Input, Button } from "antd";

import style from "./style.less";
import userApi from "@api/user-api";
import IconFont from "@components/myIconfont";

export default () => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
  };

  const onFinish = async (values: any) => {
    const res = await userApi.addUser(values);
    console.log(res);
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
            name={"name"}
            label="你の昵称"
            rules={[{ required: true, message: "这个昵称好像不行" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="你の邮箱"
            rules={[
              { required: true, type: "email", message: "这个邮箱好像不行" }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="你の暗号"
            name="pass"
            rules={[{ required: true, message: "这个暗号好像不行" }]}
          >
            <Input.Password />
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
