import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "reactstrap";

const controls = [
  {
    label: "Salad",
    type: "salad",
  },
  {
    label: "Cheese",
    type: "cheese",
  },
  {
    label: "Meat",
    type: "meat",
  },
];

const BuildControls = (props) => {
  return (
    <div className="d-flex flex">
      <div className="mr-auto ml-5">{props.label}</div>
      <button
        className="btn btn-danger btn-sm m-1"
        onClick={() => props.removeIngredient(props.type)}
      >
        Less
      </button>
      <button
        className="btn btn-success btn-sm m-1"
        onClick={() => props.addIngredientHandle(props.type)}
      >
        More
      </button>
    </div>
  );
};

const Controls = (props) => {
  return (
    <div className="container ml-md-5" style={{ textAlign: "center" }}>
      <Card
        style={{
          marginTop: "30px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <CardHeader
          style={{
            backgroundColor: "#D70F63",
            color: "white",
          }}
        >
          <h4>Add Ingredients</h4>
        </CardHeader>
        <CardBody>
          {controls.map((control) => (
            <BuildControls
              label={control.label}
              type={control.type}
              key={Math.random()}
              addIngredientHandle={props.addIngredientHandle}
              removeIngredient={props.removeIngredient}
            />
          ))}
        </CardBody>
        <CardFooter>
          <h5>Price : BDT {props.totalPrice}</h5>
        </CardFooter>
        <Button
          type="button"
          disabled={props.price}
          color="secondary"
          onClick={props.toggleModal}
        >
          Order Now
        </Button>
      </Card>
    </div>
  );
};

export default Controls;
