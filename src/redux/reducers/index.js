import { combineReducers } from "redux";
import userReducer from "./userReducer";
const createRootReducer = () =>
  combineReducers({
    userReducer,
  });

export default createRootReducer;
