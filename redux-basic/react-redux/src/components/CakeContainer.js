import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyBiscuits, buyCake } from "../redux";

const CakeContainer = (props) => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const users = useSelector((state) => state.cake.users);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  return (
    <>
      {/* <h1>Num of cakes : {props.numOfCakes}</h1> */}
      <h1>Num Of Cakes - {numOfCakes}</h1>
      {/* <p>Users - {props.users}</p> */}
      <p>{users}</p>
      {/* <button onClick={props.buyCake}>Buy Cake</button> */}
      <input
        type="text"
        name="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>Buy Cake</button>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.biscuit.numOfBiscuits;

  return {
    item: itemState,
  };
  return {
    numOfCakes: state.numOfCakes,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyBiscuits());

  return {
    buyCkae: dispatchFunction,
  };
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
export default CakeContainer;
