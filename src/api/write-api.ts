import axios from "axios";
export default {
  //留言
  saveWrite(param: any) {
    return axios.post("/msg_board", param);
  },
  //留言板列表
  getWrite() {
    return axios.get("/msg_board/list");
  },
};
