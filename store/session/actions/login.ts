import { LoginActionTypes } from "../types";

const loginRequestAction = (username: String, password: String) => ({
  type: LoginActionTypes.request,
  payload: {
    username,
    password
  }
});

export type loginRequestAction = ReturnType<typeof loginRequestAction>;

export default loginRequestAction;
