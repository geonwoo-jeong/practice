import produce from "immer";
import { SessionInitialState } from "./states";
import { SessionActionTypes } from "./actions";

const sessionReducers = (
  state = SessionInitialState,
  action: SessionActionTypes
) => {
  return produce(state, dract => {
    switch (action.type) {
      default:
        console.log("Hello");
    }
  });
};

export default sessionReducers;
