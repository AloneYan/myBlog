import axios from "axios";
import { message } from "antd";
import moment from "moment";

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
