import axios from "axios";
import { message, Modal } from "antd";
import moment from "moment";
import history from "./history";

// axios.defaults.baseURL = "http://dshvv.com:7001";
axios.defaults.baseURL = "http://192.168.0.100:7001";

//请求拦截
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    if (token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.token = token; //请求头加上token
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
//拦截响应，做统一处理
axios.interceptors.response.use(
  response => {
    if (response.data.status === 0) {
      return response;
    } else if (response.data.status === -2) {
      Modal.confirm({
        title: "提示",
        cancelText: "就不",
        okText: "去登录",
        content: "你还没有登录呦",
        onOk() {
          history.push("/login");
        },
        onCancel() {}
      });
    } else {
      message.error(response.data.error);
    }
    return response;
  },
  error => {
    message.error("很遗憾 请求无响应");
    return Promise.reject(error); // 返回接口返回的错误信息
  }
);

// 里面的字符可以根据自己的需要进行调整
moment.locale("zh-cn", {
  relativeTime: {
    future: "%s内",
    past: "%s前",
    s: "几秒",
    ss: "%d秒",
    m: "1分钟",
    mm: "%d分钟",
    h: "1小时",
    hh: "%d小时",
    d: "1天",
    dd: "%d天",
    M: "1个月",
    MM: "%d个月",
    y: "1年",
    yy: "%d年"
  }
});
