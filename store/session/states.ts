export interface Menu {
  id: String;
  group: String;
}

export interface User {
  companyCode: String;
  port: String;
  role: String;
}

export interface ISessionState {
  user: User;
  menu: [Menu];
}

export const SessionInitialState = {
  user: null,
  menu: null
};
