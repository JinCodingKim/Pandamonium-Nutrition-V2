import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import shopReducer from "./ducks/shopReducer";

export default createStore(
  combineReducers({ shopReducer }),
  applyMiddleware(promiseMiddleware())
);
