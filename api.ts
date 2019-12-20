import axios from "axios";

type loginData = {
  login_id: String;
  password: String;
  terminal_UUID?: String;
};

const api = axios.create({
  baseURL: "http://10.110.11.17:41000/api/"
});

export const loginApi = (data: loginData) => api.post("login", data);
