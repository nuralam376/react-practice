import React from "react";
import Product from "../Product/Product";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import Cart from "../Cart/Cart";

const Shop = ({ products, addToCart }) => {
  return (
    <div>
      <h1>Shop</h1>
      <Cart />
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
