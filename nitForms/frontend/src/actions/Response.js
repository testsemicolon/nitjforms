import Axios from "axios";
import {
  GET_DEPT_DETAILS,
  GET_RESPONSE,
  GET_MULTIPLE_RESPONSE,
  CLEAR_RESPONSE,
} from "./types";
import axios from "axios";
import { createMessage, returnErrors } from "./Messages";

// for director use only
export const getResponse = (title, ID, linkToPage) => (dispatch) => {
  console.log(title, ID);
  axios
    .get(`/${title}`)
    .then((res) => {
      dispatch({
        type: GET_RESPONSE,
        payload: res.data,
        id: ID,
        title: title,
        linkToPage: linkToPage,
      });
    })
    .catch((err) => console.log(err));
};

export const getMultipleResponse = (title, ID, linkToPage) => (dispatch) => {
  console.log(title, ID);
  axios
    .get(`/${title}`)
    .then((res) => {
      dispatch({
        type: GET_MULTIPLE_RESPONSE,
        payload: res.data,
        id: ID,
        title: title,
        linkToPage: linkToPage,
      });
    })
    .catch((err) => console.log(err));
};

export const clearResponse = () => (dispatch) => {
  dispatch({
    type: CLEAR_RESPONSE,
  });
};
