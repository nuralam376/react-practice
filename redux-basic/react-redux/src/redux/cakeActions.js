import axios from "axios";
import { BUY_CAKE } from "./cakeTypes";

export const buyCake = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    dispatch({
      type: BUY_CAKE,
      payload: response.data.map((user) => user.id),
    });
  };
};
