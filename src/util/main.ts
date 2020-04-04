import axios from "axios";
import { message } from "antd";

// axios.defaults.baseURL = "http://dshvv.com:7001";
axios.defaults.baseURL = "http://192.168.0.100:7001";
if (localStorage.token) {
  axios.defaults.headers.common["token"] = localStorage.token;
}

//拦截响应，做统一处理
axios.interceptors.response.use(
  response => {
    if (response.data.status !== 0) {
      message.error(response.data.error);
    }
    return response;
  },
  error => {
    message.error("很遗憾 请求无响应");
    return Promise.reject(error); // 返回接口返回的错误信息
  }
);
