import axios from "axios";
import { message, Modal } from "antd";
import moment from "moment";
import history from "./history";
import qs from "qs";

//axios.defaults.baseURL = "http://hhan.top:7777";
axios.defaults.baseURL = "http://localhost:7777"

// 请求拦截
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.token = token; //请求头加上token
    }
    if (!Boolean(config.headers.json)) {
      config.data = qs.stringify(config.data);
    }
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
        onCancel() {},
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
    yy: "%d年",
  },
});
