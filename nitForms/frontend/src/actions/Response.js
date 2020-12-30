import Axios from "axios";
import { GET_DEPT_DETAILS, GET_RESPONSE } from "./types";
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
        formName: title,
        link: linkToPage,
      });
    })
    .catch((err) => console.log(err));
};
