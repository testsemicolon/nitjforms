import axios from "axios";
import { GET_NOTING_TEMPLATE, POST_FORM, POST_NOTING_TEMPLATE } from "./types";

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

export const postNotingTemplate = (quest, quest1) => (dispatch) => {
  axios
    .post("notingTemplate/", quest)
    .then((res) => {
      if (quest1["notingLink"] === null) {
        quest1["notingLink"] = [];
      }
      quest1["notingLink"].push(res.data.key);
      console.log(quest1);

      axios
        .put(`name/${quest1.id}/`, quest1)
        .then((res1) => console.log(res1))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
