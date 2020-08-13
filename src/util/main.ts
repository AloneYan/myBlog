import moment from "moment";

const ossUrl: string = "https://dshvv.oss-cn-beijing.aliyuncs.com/yh/";

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
