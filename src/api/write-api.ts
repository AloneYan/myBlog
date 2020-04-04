import axios from "axios";
export default {
  //留言
  saveWrite(param: object) {
    return axios.post("/msgBoard", param);
  },
  //留言板列表
  getWrite() {
    return axios.get("/msgBoard/list");
  }
};
