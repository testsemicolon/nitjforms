import axios from "axios";
import { tokenConfig } from "./Auth";
import { createMessage, returnErrors } from "./Messages";

export const formSubmit = (quest, url) => (dispatch, getState) => {
  console.log(quest);
  axios
    .post(`${url}/`, quest, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ submitForm: "Form has been submitted" }));
    })
    .catch(
      (err) => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};
