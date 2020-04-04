import React from "react";
import { Form, Input, Button, message } from "antd";
import { connect } from "react-redux";

import style from "./style.less";
import { setPreRoter } from "../../redux";
import userApi from "@api/user-api";
import IconFont from "@components/myIconfont";
import history from "@util/history";

const Register = (props: any) => {
  const onFinish = async (values: any) => {
    const res = await userApi.addUser(values);
    if (res.data.status === 0) {
      //把本层路由地址放到redux的preRoter中
      props.setPreRoter("register");
      message.success("注册成功");
      history.push("/login");
    }
  };

  //路由跳转
  const goLogin = () => {
    history.push("/login");
  };
  const goApp = () => {
    history.push("/app");
  };

  //标签布局
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
  };

  return (
    <div className={style.register}>
      <div className={style.registerContent}>
        <div className={style.registerLogo}>
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
        <div className={style.registerFooter}>
          <span className={style.registerFooterBack}>
            <span onClick={goApp}>回到主站</span>
          </span>
          <span className={style.registerFooterGo}>
            <span onClick={goLogin}>已有账号去登录 →</span>
          </span>
        </div>
      </div>
    </div>
  );
};

//把本层路由地址放到redux的preRoter中
export default connect(null, (dispatch: any) => ({
  setPreRoter(preRoter: any) {
    dispatch(setPreRoter({ preRoter }));
  }
}))(Register);
