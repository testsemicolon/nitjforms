import axios from "axios";
import { tokenConfig } from "./Auth";
import { createMessage } from "./Messages";
import { GET_ACCEPTED } from "./types";

export const addAccepted = (quest, title) => (dispatch, getState) => {
  axios
    .post(`${title}Accepted/`, quest, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ submitForm: "Response has been accepted" }));
    })
    .catch((err) => console.log(err));
};

export const getAccepted = (title) => (dispatch, getState) => {
  axios
    .get(`${title}Accepted/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ACCEPTED,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
