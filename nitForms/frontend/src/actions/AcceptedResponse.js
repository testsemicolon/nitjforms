import axios from "axios";
import { tokenConfig } from "./Auth";
import { createMessage } from "./Messages";
import { GET_ACCEPTED } from "./types";

export const addAccepted = (quest, title) => (dispatch, getState) => {
  title = title.replace(/[ ]/g, "_");
  axios
    .post(`${title}Accepted/`, quest, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ submitForm: "Response has been accepted" }));
    })
    .catch((err) => console.log(err));
};

export const getAccepted = (title) => (dispatch, getState) => {
  title = title.replace(/[ ]/g, "_");
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

export const putAccepted = (id, title, quest) => () => {
  title = title.replace(/[ ]/g, "_");
  axios
    .put(`${title}Accepted/${id}/`, quest)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
