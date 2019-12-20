import { ISessionState, SessionInitialState } from "./session/states";

export interface IInitialState {
  session: Readonly<ISessionState>;
}

export const InitialState: IInitialState = {
  session: SessionInitialState
};
