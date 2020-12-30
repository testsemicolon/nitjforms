import axios from "axios";
import { POST_NOTIFICATION, GET_NOTIFICATION } from "./types";
import { createMessage, returnErrors } from "./Messages";
import { getResponse } from "./Response";

export const getNotification = (username) => (dispatch) => {
  axios
    .get("/userNotifications")
    .then((res) => {
      dispatch({
        type: GET_NOTIFICATION,
        payload: res.data,
        userName: username,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getDirectorNotification = (username) => (dispatch) => {
  axios
    .get("/userNotifications")
    .then((res) => {
      console.log(res.data);
      res.data.map((notify) => {
        if (notify.reciever === username) {
          dispatch(
            getResponse(
              notify.formName,
              notify.acceptedResponseID,
              notify.linkToPage
            )
          );
        }
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const postNotification = (quest) => (dispatch) => {
  axios
    .post("/userNotifications/", quest)
    .then((res) => {
      dispatch({ type: POST_NOTIFICATION, payload: res.data });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
