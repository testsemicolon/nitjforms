import axios from "axios";
import { tokenConfig } from "./Auth";
import { GET_SHARED_USERS } from "./types";

export const getSharedUsers = () => (dispatch) => {
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

export const deleteSharedUsers = (id, quest) => (dispatch) => {
  axios
    .delete(`/sharedUser/${id}`)
    .then(postSharedUsers(quest))
    .catch((err) => console.log(err));
};
export const postSharedUsers = (quest) => (dispatch) => {
  axios
    .post("/sharedUser/", quest)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
