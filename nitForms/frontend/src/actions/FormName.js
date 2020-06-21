import { ADD_NAME, GET_NAME } from "./types";
import axios from "axios";
import { tokenConfig } from "./Auth";

export const addName = (desc) => (dispatch, getState) => {
  axios.post("name/", desc, tokenConfig(getState)).then((res) => {
    dispatch({
      type: ADD_NAME,
      payload: res.data,
    });
  });
};

export const getName = () => (dispatch, getState) => {
  axios.get("name/", tokenConfig(getState)).then((res) => {
    dispatch({
      type: GET_NAME,
      payload: res.data,
    });
  });
};
