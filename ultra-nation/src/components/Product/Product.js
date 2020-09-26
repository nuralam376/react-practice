import React from "react";

const Product = ({ product, addToCart }) => {
  const { id, name } = product;
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => addToCart(id, name)}>Add to Cart</button>
    </div>
  );
};

export default Product;
