import axios from "axios";
export default {
  //日常保存
  saveEvery(param: object) {
    return axios.post("/mood", param);
  },
  //获取日常列表
  getList() {
    return axios.get("/mood/list");
  }
};
