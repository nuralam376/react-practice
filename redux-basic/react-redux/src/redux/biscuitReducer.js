import { BUY_BISCUITS } from "./biscuitTypes";

const initialState = {
  numOfBiscuits: 20,
  todos: [],
};

export const biscuitReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BISCUITS:
      return {
        ...state,
        numOfBiscuits: state.numOfBiscuits - 1,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default biscuitReducer;
