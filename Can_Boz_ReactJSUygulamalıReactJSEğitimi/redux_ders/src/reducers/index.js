import { combineReducers } from "redux";

import counterReducer from "./counter";
import loggedReducer from "./log";

export default { counter: counterReducer, isLogged: loggedReducer };
