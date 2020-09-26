import axios from "axios";
import { GET_NOTIFICATON, GET_NOTIFICATION } from "./types";
import { createMessage } from "./Messages";

export const getNotification = (username) => (dispatch) => {
  axios
    .get("/userNotifications")
    .then((res) => {
      dispatch({
        type: GET_NOTIFICATION,
        payload: res.data.filter((notify) => notify.reciever === username),
      });
    })
    .catch((err) => console.log(err));
};

export const postNotification = (quest) => (dispatch) => {
  axios.post("/userNotifications/", quest).then((resr) => {
    console.log(res);
  });
};
