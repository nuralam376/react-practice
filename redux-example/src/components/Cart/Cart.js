import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

const Cart = ({ cart, removeFromCart }) => {
	return (
		<div>
			<h1>Cart</h1>
			{cart.map((product) => (
				<li key={product.cartId}>
					{product.productName}{" "}
					<button onClick={() => removeFromCart(product.cartId)}>X</button>
				</li>
			))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart,
	};
};

const mapDispatchToProps = {
	removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
