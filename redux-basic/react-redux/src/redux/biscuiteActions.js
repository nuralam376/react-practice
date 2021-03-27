import axios from "axios";
import { BUY_BISCUITS } from "./biscuitTypes";

export const buyBiscuits = () => {
  return async (dispatch) => {
    const todos = await axios.get("https://jsonplaceholder.typicode.com/todos");

    dispatch({
      type: BUY_BISCUITS,
      payload: [...todos.data.map((data) => data.id)],
    });
  };
};
