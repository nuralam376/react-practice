import React from "react";

const Sumamry = (props) => {
  const ingredient = props.ingredients.map((item) => (
    <li key={item.type}>
      <span style={{ textTransform: "capitalize" }}>{item.type}</span> :{" "}
      {item.amount}
    </li>
  ));
  return <div>{ingredient}</div>;
};

export default Sumamry;
