import { combineReducers } from "redux";
import xucxacReducer from "./xucxacReducer";

const rootReducer = combineReducers({
  // nest reducers
  xucxacReducer,
});
export default rootReducer;
