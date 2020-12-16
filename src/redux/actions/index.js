import { USERS_API_URL } from "../../utils";
import { USERS_START, USERS_SUCCESS, STOP_LOADING } from "../actionTypes";

export const getUsersList = () => {
  return (dispatch) => {
    dispatch({
      type: USERS_START,
      payload: {
        loading: true,
      },
    });
    fetch(USERS_API_URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: USERS_SUCCESS,
          payload: data,
        });
      })
      .then(() => {
        dispatch({
          type: STOP_LOADING,
          payload: {
            loading: false,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        throw new Error(err);
      });
  };
};
