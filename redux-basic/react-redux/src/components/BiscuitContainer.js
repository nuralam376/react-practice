import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { buyBiscuits } from "../redux";

function BiscuitContainer(props) {
  const numOfBiscuits = useSelector((state) => state.biscuit.numOfBiscuits);
  const todos = useSelector((state) => state.biscuit.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Num Of Biscuits - {props.biscuit}</h1>
      <h2>Biscuits - {numOfBiscuits}</h2>
      <p>Todos - {todos}</p>
      <button onClick={props.buyBiscuit}>Buy Biscuit</button>
      <button onClick={() => dispatch(buyBiscuits())}>Decrease</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    biscuit: state.biscuit.numOfBiscuits,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBiscuit: () => dispatch(buyBiscuits()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BiscuitContainer);
