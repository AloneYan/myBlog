import {Global} from 'aegis-api-proxy';
import apiObj from './api-definition';

// ajax请求的基本配置
const config = {
  pathSuffix: '',
  basePath: 'http://localhost:7777',
  httpStatusErrorHandler: () => {
    return true;
  },
  logicErrorHandler: () => {
    return true;
  }
};

export default Global.proxyAPI(apiObj, config, {
  headers: {common: {}}
});