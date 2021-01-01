import axios from "axios";
import { tokenConfig } from "./Auth";
import { createMessage, returnErrors } from "./Messages";
import { GET_ACCEPTED, USER_LOADING, USER_LOADED, PUT_ACCEPTED } from "./types";

export const addAccepted = (quest, title) => (dispatch, getState) => {
  title = title.replace(/[ ]/g, "_");
  axios
    .post(`${title}Accepted/`, quest, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ submitForm: "Response has been accepted" }));
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
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
    .catch(
      (err) => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const putAccepted = (id, title, quest) => (dispatch) => {
  title = title.replace(/[ ]/g, "_");
  axios
    .put(`${title}Accepted/${id}/`, quest)
    .then((res) => {
      dispatch({ type: PUT_ACCEPTED, payload: res.data });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const putResponse = (id, title, quest) => (dispatch) => {
  console.log(title);
  console.log(quest);
  axios
    .put(`${title}/${id}/`, quest)
    .then((res) => {
      console.log(res);
      dispatch({ type: PUT_RESPONSE, payload: res.data });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
