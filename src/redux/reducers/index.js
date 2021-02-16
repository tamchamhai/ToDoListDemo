import { combineReducers } from "redux";
import xucxacReducer from "./xucxacReducer";
import userReducer from "./userReducer";
import shopingCartReducer from "./shopingCartReducer";

const rootReducer = combineReducers({
  // nest reducers
  xucxacReducer,
  userReducer,
  shopingCartReducer,
});
export default rootReducer;
