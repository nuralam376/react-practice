import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import cakeReducer from "./cakeReducer";

const store = createStore(cakeReducer, applyMiddleware(reduxThunk));

export default store;
