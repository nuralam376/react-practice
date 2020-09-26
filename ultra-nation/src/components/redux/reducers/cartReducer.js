import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
  cart: [],
  products: [
    { id: 1, name: "Hp", category: "laptop" },
    { id: 2, name: "Lenovo", category: "laptop" },
    { id: 3, name: "Acer", category: "laptop" },

    { id: 4, name: "Samsung", category: "mobile" },
    { id: 5, name: "Nokia", category: "mobile" },
    { id: 6, name: "Apple", category: "mobile" },

    { id: 7, name: "Sony", category: "camera" },
    { id: 8, name: "Nikkon", category: "camera" },
    { id: 9, name: "Canon", category: "camera" },
  ],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItem = {
        id: action.payload.id,
        name: action.payload.name,
        cartId: state.cart.length + 1,
      };

      const newCart = [...state.cart, newItem];
      return { products: state.products, cart: newCart };
    }
    case REMOVE_FROM_CART:
      const newCart = state.cart.filter((product) => product !== action.id);
      return { ...state, cart: newCart };
    default:
      return state;
  }
};

export default cartReducer;
