import axios from "axios";
import { tokenConfig } from "./Auth";
import { GET_SHARED_USERS } from "./types";
import { createMessage } from "./Messages";

export const getSharedUser = () => (dispatch) => {
  axios
    .get("/sharedUser")
    .then((res) => {
      dispatch({
        type: GET_SHARED_USERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const putSharedUser = (id, quest) => (dispatch) => {
  var msg = `Form ${quest.formName} has been with ${quest.userName} `;
  axios.put(`/sharedUser/${id}/`, quest).then((res) => {
    dispatch((res) => {
      createMessage({
        sharedUser: msg,
      });
    });
  });
};
export const postSharedUser = (quest) => (dispatch) => {
  var msg = `Form ${quest.formName} has been with ${quest.userName} `;
  axios
    .post("/sharedUser/", quest)
    .then((res) => {
      dispatch(
        createMessage({
          sharedUser: msg,
        })
      );
    })
    .catch((err) => console.log(err));
};
