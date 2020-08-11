import axios from "axios";
import { tokenConfig } from "./Auth";
import { GET_SHARED_USERS } from "./types";

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

export const putSharedUser = (id, quest) => () => {
  axios.put(`/sharedUser/${id}/`, quest);
};
export const postSharedUser = (quest) => () => {
  axios
    .post("/sharedUser/", quest)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
