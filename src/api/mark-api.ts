import axios from "axios";
export default {
  //文档类型保存
  saveMarkType(param: object) {
    return axios.post("/dicts", param);
  },
  //获取文档类型列表
  getMarkTypeList(params: object) {
    return axios.get("/dicts/list", { params });
  },
};
