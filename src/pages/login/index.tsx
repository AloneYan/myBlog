import React from "react";
import { Form, Input, Button, message } from "antd";

import style from "./style.less";
import userApi from "@api/user-api";
import IconFont from "@components/myIconfont";
import history from "@util/history";

export default () => {
  const onFinish = async (values: any) => {
    const res = await userApi.getUser(values);
    if (res.data.status === 0) {
      localStorage.setItem("token", res.data.data.token);
      message.success("登录成功");
      setTimeout(() => {
        history.push("/app");
      }, 1000);
    } else {
      message.error(res.data.error);
    }
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
        >
          <Form.Item
            label="你の邮箱"
            name="email"
            rules={[{ required: true, message: "这里不能不填！" }]}
          >
            <Input placeholder="输入邮箱登录吧" />
          </Form.Item>
          <Form.Item
            label="你の暗号"
            name="pass"
            rules={[{ required: true, message: "忘了报上暗号啦！" }]}
          >
            <Input.Password placeholder="报上暗号来" />
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
