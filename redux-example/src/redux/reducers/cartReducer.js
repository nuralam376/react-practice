import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
	cart: [],
	products: [
		{
			id: 1,
			name: "HP",
		},
		{
			id: 2,
			name: "Asus",
		},
		{
			id: 3,
			name: "Lenovo",
		},
		{
			id: 4,
			name: "Toshiba",
		},
		{
			id: 5,
			name: "Dell",
		},
	],
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const newItem = {
				productId: action.id,
				productName: action.name,
				cartId: state.cart.length + 1,
			};

			return {
				...state,
				cart: [...state.cart, newItem],
			};
		case REMOVE_FROM_CART:
			const newCart = state.cart.filter(
				(product) => product.cartId !== action.id
			);
			return {
				...state,
				cart: newCart,
			};

		default:
			return state;
	}
};
