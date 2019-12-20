import { combineReducers } from "redux";
import sessionReducers from "./session/reducers";
import { IInitialState } from "./states";

export const rootReducers = combineReducers<IInitialState>({
  session: sessionReducers
});
