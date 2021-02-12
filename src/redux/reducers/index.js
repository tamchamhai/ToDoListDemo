import { combineReducers } from "redux";
import xucxacReducer from "./xucxacReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  // nest reducers
  xucxacReducer,
  userReducer,
});
export default rootReducer;
