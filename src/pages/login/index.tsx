import React from "react";
import { Form, Input, Button, message } from "antd";
import { connect } from "react-redux";

import style from "./style.less";
import userApi from "@api/user-api";
import IconFont from "@components/myIconfont";
import history from "@util/history";

const Login = (props: any) => {
  const onFinish = async (values: any) => {
    console.log(values);
    const res = await userApi.getUser(values);
    if (res.data.status === 200) {
      //保存token和用户信息到浏览器缓存中
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data.user));
      message.success("登录成功");
      //如果从注册页跳转回来 就跳回主页面，否则跳回上一层
      if (props.preRoter === "register") {
        history.push("/");
      } else {
        history.goBack();
      }
    }
  };
  //路由跳转
  const goRegister = () => {
    history.push("/register");
  };
  const goApp = () => {
    history.push("/app");
  };
  const goForgetPass = () => {
    history.push("/app");
  };

  // 标签布局
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
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
            <span onClick={goApp}>回到主站</span>
          </span>
          <span className={style.loginFooterGo}>
            <span onClick={goForgetPass}>忘记密码?</span>
            <span onClick={goRegister}> 没有账号</span>
          </span>
        </div>
      </div>
    </div>
  );
};

//在redux中取出preRoter上层路由
export default connect(
  (state: any) => ({
    preRoter: state.common.preRoter,
  }),
  null
)(Login);
