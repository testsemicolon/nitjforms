import axios from "axios";
import { tokenConfig } from "./Auth";
import { createMessage, returnErrors } from "./Messages";

export const formSubmit = (quest, url) => (dispatch, getState) => {
  Object.keys(quest).map((q) => q.split(" ").join("_"));
  console.log(quest);
  axios
    .post(`${url}/`, quest, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ submitForm: "Form has been submitted" }));
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
