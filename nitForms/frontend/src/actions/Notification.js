import axios from "axios";
import { GET_NOTIFICATON, GET_NOTIFICATION } from "./types";
import { createMessage } from "./Messages";

export const getNotification = (username) => (dispatch) => {
  axios
    .get("/userNotifications")
    .then((res) => {
      console.log(res);
      dispatch({
        type: GET_NOTIFICATION,
        payload: res,
      });
    })
    .catch((err) => console.log(err));
};

export const postNotification = (quest) => (dispatch) => {
  axios.post("/userNotifications/", quest).then((res) => {
    console.log(res);
  });
};
