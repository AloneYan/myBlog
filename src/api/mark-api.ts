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
  //保存文档
  saveMark(param: object) {
    return axios.post("/blog", param);
  },
  //更新文档
  updateMark(param: object) {
    return axios.put("/blog", param);
  },
  //获取文档列表
  getMarkList() {
    return axios.get("/blog/list");
  },
  //获取文档详情
  getMark(params: object): any {
    return axios.get("/blog", { params });
  },
  //删除文档
  rmMark(params: object): any {
    return axios.delete("/blog", { params });
  },
};
