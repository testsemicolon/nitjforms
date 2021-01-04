import axios from "axios";
import { GET_MESSAGE, POST_MESSAGE } from "./types";

export const getMessage = (id) => (dispatch) => {
  console.log("sdas");
  var messages = [];
  axios
    .get("/ChatSystem")
    .then((res) => {
      messages = res.data.filter((mes) => mes.acceptedResponseID === id);
      dispatch({
        type: GET_MESSAGE,
        payload: messages,
      });
    })
    .catch((err) => console.log(err));
};

export const postMessage = (quest) => (dispatch) => {
  axios
    .post("/ChatSystem/", quest)
    .then((res) => {
      dispatch({ type: POST_MESSAGE, payload: res.data });
    })
    .catch((err) => console.log(err));
};
