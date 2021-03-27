import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = (props) => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const users = useSelector((state) => state.cake.users);
  const dispatch = useDispatch();

  return (
    <>
      {/* <h1>Num of cakes : {props.numOfCakes}</h1> */}
      <h1>Num Of Cakes - {numOfCakes}</h1>
      {/* <p>Users - {props.users}</p> */}
      <p>{users}</p>
      {/* <button onClick={props.buyCake}>Buy Cake</button> */}
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
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

// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
export default CakeContainer;
