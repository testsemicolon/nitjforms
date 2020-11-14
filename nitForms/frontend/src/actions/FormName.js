import { ADD_NAME, GET_NAME } from "./types";
import axios from "axios";
import { tokenConfig } from "./Auth";

export const addName = (desc) => (dispatch) => {
  axios.post("name/", desc).then((res) => {
    dispatch({
      type: ADD_NAME,
      payload: res.data,
    });
  });
};

export const getName = () => (dispatch) => {
  axios.get("name/").then((res) => {
    dispatch({
      type: GET_NAME,
      payload: res.data,
    });
  });
};

export const updateName = (id, quest) => () => {
  axios.put(`name/${id}/`, quest);
};

export const linkForm = (id, formObj) => () => {
  axios.put(`name/${id}/`, formObj).catch((err) => console.log(err));
};
