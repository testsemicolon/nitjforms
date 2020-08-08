import axios from "axios";
import { GET_NOTING_TEMPLATE } from "./types";

export const getNotingTemplate = () => (dispatch) => {
  axios
    .get("notingTemplate/")
    .then((res) => {
      dispatch({
        type: GET_NOTING_TEMPLATE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const postNotingTemplate = (quest) => () => {
  axios.post("notingTemplate/", quest);
};
