import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { reducers } from "./combineReducers";

export const configureStore = () => {
  const middlewares = [];

  middlewares.push(thunk);

  const composeEnhancers =
    typeof window === "object" &&
    process.env.NODE_ENV !== "production" &&
    window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
      ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(reducers, enhancer);

  return store;
};
