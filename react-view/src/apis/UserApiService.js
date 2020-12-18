import Axios from "axios";

const API_URL = "http://localhost:8090/user"; //spring boot back-end url

class UserApiService {
  loginOk(user) {
    return Axios.post(API_URL + "/login", user);
  }
  logoutOK() {
    return Axios.get(API_URL + "/logout");
  }
}

export default new UserApiService();
