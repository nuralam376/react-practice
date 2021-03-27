import { combineReducers } from "redux";
import biscuitReducer from "./biscuitReducer";
import cakeREducer from "./cakeReducer";

const rootReducer = combineReducers({
  cake: cakeREducer,
  biscuit: biscuitReducer,
});

export default rootReducer;
