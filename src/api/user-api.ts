import axios from "axios";
export default {
  addUser(user: object) {
    return axios.post("/user", user);
  },
  getUser(user: object) {
    return axios.post("/login", user);
  }
};
