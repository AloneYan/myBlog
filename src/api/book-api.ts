import axios from "axios";
export default {
  //获取日常列表
  getList() {
    return axios.get("/mood/list");
  },
};
