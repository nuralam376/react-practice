import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10,
  users: [],
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default cakeReducer;
