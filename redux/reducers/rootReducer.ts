import { combineReducers } from "redux";
import counter from "./counter";
import isLogged from "./isLogged";
import loggin from "./loggin";

const rootReducer = combineReducers({
  counter: counter,
  isLogged: isLogged,
  loggin: loggin,
});

export default rootReducer;
