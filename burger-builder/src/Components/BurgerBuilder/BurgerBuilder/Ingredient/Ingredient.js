import React from "react";
import breadTop from "../../../../assets/images/top.png";
import breadBottom from "../../../../assets/images/bottom.png";
import cheese from "../../../../assets/images/cheese.png";
import salad from "../../../../assets/images/salad.png";
import meat from "../../../../assets/images/meat.png";
import "./Ingredient.css";

const Ingredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = (
        <div>
          <img src={breadBottom} alt="breadbottom" />
        </div>
      );
      break;
    case "bread-top":
      ingredient = (
        <div>
          <img src={breadTop} alt="breadTop" />
        </div>
      );
      break;
    case "cheese":
      ingredient = (
        <div>
          <img src={cheese} alt="cheese" />
        </div>
      );
      break;
    case "salad":
      ingredient = (
        <div>
          <img src={salad} alt="salad" />
        </div>
      );
      break;
    case "meat":
      ingredient = (
        <div>
          <img src={meat} alt="meat" />
        </div>
      );
      break;

    default:
      ingredient = null;
  }

  return <div className="Ingredient">{ingredient}</div>;
};

export default Ingredient;
