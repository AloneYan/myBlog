import axios from "axios";
export default {
  //日常保存
  saveEvery(param: object) {
    return axios.post("/mood", param);
  }
};
