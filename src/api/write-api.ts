import axios from "axios";
export default {
  //留言板
  saveWrite(param: object) {
    return axios.post("/msgBoard", param);
  }
};
