import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootReducers } from "./reducers";

export const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
};
