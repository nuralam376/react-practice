import { createStore } from "redux";
import CartReducer from "../reducers/cartReducer";

const store = createStore(CartReducer);

export default store;
