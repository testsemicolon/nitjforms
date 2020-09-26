import axios from "axios";
import { GET_FORM_STATUS } from "./types";

export const getFormStatus = () => (dispatch) => {
  axios
    .get("/formIndex")
    .then((res) => {
      dispatch({
        type: GET_FORM_STATUS,
        payload: res,
      });
    })
    .catch((err) => console.log(err));
};

export const postFormStatus = (quest) => (dispatch) => {
  axios.post("/formIndex/", quest).then((res) => {
    console.log(res);
  });
};

export const putFormStatus = (quest, id) => (dispatch) => {
  axios.put(`/formIndex/${id}/`, quest).then((res) => {
    console.log(res);
  });
};
