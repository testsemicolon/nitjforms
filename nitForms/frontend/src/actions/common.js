import { GET_PERM } from "./types";
import axios from "axios";
import { tokenConfig } from "./Auth";

export const getPerm = () => (dispatch, getState) => {
  axios
    .get("userperm/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PERM,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
