import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = (props) => {
  return (
    <>
      <h1>Num of cakes : {props.numOfCakes}</h1>
      <p>Users - {props.users}</p>
      <button onClick={props.buyCake}>Buy Cake</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
