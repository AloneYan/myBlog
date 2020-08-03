import { Global } from "aegis-api-proxy";
import apiObj from "./api-definition";
import axios from "axios";
import qs from "qs";

// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    config.data = qs.parse(config.data);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// ajax请求的基本配置
const config = {
  pathSuffix: "",
  basePath: "https://api.han96.com",
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
