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
  //保存书单
  saveBook(param: object) {
    return axios.post("/book", param);
  },
  //更新书单
  updateBook(param: object) {
    return axios.put("/book", param);
  },
  //获取书单列表
  getList() {
    return axios.get("/book/list");
  },
  //获取书单详情
  getBook(params: object) {
    return axios.get("/book", { params });
  },
  //删除书单
  rmBook(params: object): any {
    return axios.delete("/blog", { params });
  },
};
