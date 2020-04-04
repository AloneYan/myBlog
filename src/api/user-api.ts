import axios from "axios";
export default {
  //注册
  addUser(user: object) {
    return axios.post("/user", user);
  },
  //登录
  getUser(user: object) {
    return axios.post("/login", user);
  }
};
