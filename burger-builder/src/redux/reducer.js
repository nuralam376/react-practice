import * as actionTypes from "./actionTypes";

const initialState = {
  ingredients: [
    { type: "cheese", amount: 0 },
    {
      type: "salad",
      amount: 0,
    },
    {
      type: "meat",
      amount: 0,
    },
  ],
  ingredientPrices: {
    salad: 20,
    cheese: 40,
    meat: 90,
  },
  totalPrice: 0,
  modalOpen: false,
  purchasable: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: {
      const elements = [...state.ingredients];
      const totalPrice =
        state.totalPrice + state.ingredientPrices[action.payload];
      for (let item of elements) {
        if (item.type === action.payload) item.amount++;
      }
      return {
        ...state,
        ingredients: elements,
        totalPrice,
      };
    }
    case actionTypes.REMOVE_INGREDIENT: {
      const elements = [...state.ingredients];
      const totalPrice =
        state.totalPrice - state.ingredientPrices[action.payload];
      for (let item of elements) {
        if (item.type === action.payload) {
          if (item.amount <= 0) return;
          item.amount--;
        }
      }
      return {
        ...state,
        ingredients: elements,
        totalPrice,
      };
    }

    case actionTypes.UPDATE_PURCHASABLE: {
      const sum = state.ingredients.reduce((sum, element) => {
        return sum + element.amount;
      }, 0);

      return {
        ...state,
        purchasable: sum > 0,
      };
    }
    default:
      return state;
  }
};

export default reducer;
