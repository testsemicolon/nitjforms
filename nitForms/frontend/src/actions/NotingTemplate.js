import axios from "axios";
import { GET_NOTING_TEMPLATE } from "./types";
import { createMessage } from "./Messages";
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
      var msg = "Noting has been submitted ";
      axios
        .put(`name/${quest1.id}/`, quest1)
        .then((res1) =>
          dispatch(
            createMessage({
              notingPost: msg,
            })
          )
        )
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};


export const addNoting = (quest1) => (dispatch) => {
  var msg = "Noting has been added ";
  console.log(msg)
  axios
    .put(`name/${quest1.id}/`, quest1)
    .then((res1) =>
      dispatch(
        createMessage({
          notingPost: msg,
        })
      )
    )
    .catch((err) => console.log(err));
}