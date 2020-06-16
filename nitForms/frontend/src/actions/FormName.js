import { ADD_NAME, GET_NAME, GET_FORM_TITLE } from "./types";
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

export const getFormTitle = () => (dispatch, getState) => {
  axios.get("name/", tokenConfig(getState)).then((res) => {
    dispatch({
      type: GET_FORM_TITLE,
      payload: res.data,
    });
  });
};
