import axios from "axios";
import { message } from "antd";

axios.defaults.baseURL = "http://192.168.0.102:7001";

//拦截响应，做统一处理
axios.interceptors.response.use(
  response => {
    if (!response.data.status) {
      message.error(response.data.msg);
    }
    return response;
  },
  error => {
    message.error("很遗憾 请求无响应");
    return Promise.reject(error); // 返回接口返回的错误信息
  }
);
