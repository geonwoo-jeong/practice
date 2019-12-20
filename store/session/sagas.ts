import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import loginRequestAction from "./actions/login";
import { LoginActionTypes } from "./types";

function* login(action: ReturnType<typeof loginRequestAction>) {
  try {
    yield delay(2000);
    console.log("LOGIN");
    yield put({
      type: LoginActionTypes.success
    });
  } catch (error) {
    yield put({
      type: LoginActionTypes.failure
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LoginActionTypes.request, login);
}

export default function* sessionSagas() {
  yield all([fork(watchLogIn)]);
}
