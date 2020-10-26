import React from "react";
import Ingredient from "../Ingredient/Ingredient";
import "./Burger.css";

const Burger = (props) => {
  let ingredientArray = props.ingredients
    .map((ingredient) => {
      const amounts = [...Array(ingredient.amount).keys()];
      return amounts.map((_) => (
        <Ingredient type={ingredient.type} key={Math.random()} />
      ));
    })
    .reduce((arr, element) => {
      return arr.concat(element);
    }, []);

  if (ingredientArray.length === 0) {
    ingredientArray = <p>Please add ingredients</p>;
  }
  return (
    <div className="Burger">
      <Ingredient type="bread-top" />
      {ingredientArray}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
