import { Global } from "aegis-api-proxy";
import { message, Modal } from "antd";
import apiObj from "./api-definition";
import axios from "axios";
import qs from "qs";
import history from "../util/history";

// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.token = token; //请求头加上token
    }
    // if (!Boolean(config.headers.json)) {
    //   console.log(config)

    // }
    // console.log(decodeURIComponent(config.data))
    // console.log(qs.stringify(decodeURIComponent(config.data)))
    // config.data = qs.stringify(config.data);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//拦截响应，做统一处理
axios.interceptors.response.use(
  (response) => {
    if (response.data.status === 200) {
      return response;
    } else if (response.data.status === 601) {
      Modal.confirm({
        title: "一条小提示",
        cancelText: "就不",
        okText: "去登录",
        content: "兄dei你的登录状态失效啦，重新登录吧～",
        onOk() {
          history.push("/login");
        },
        onCancel() { },
      });
    } else {
      message.error(response.data.message);
    }
    return response;
  },
  (error) => {
    message.error("很遗憾 请求无响应");
    return Promise.reject(error); // 返回接口返回的错误信息
  }
);

// ajax请求的基本配置
const config = {
  pathSuffix: "",
  //basePath: "https://api.han96.com",
  basePath: "http://192.168.0.102:7777",
  httpStatusErrorHandler: () => {
    return true;
  },
  logicErrorHandler: () => {
    return true;
  },
};

export default Global.proxyAPI(apiObj, config, {
  headers: { common: {} },
});
