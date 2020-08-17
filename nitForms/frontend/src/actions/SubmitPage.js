import axios from "axios";
import { tokenConfig } from "./Auth";
import { createMessage, returnErrors } from "./Messages";

export const formSubmit = (quest, url) => (dispatch, getState) => {
  url = url.replace(/[ ]/g, "_");
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

export const responseReject = (quest, url, id) => (dispatch, getState) => {
  url = url.replace(/[ ]/g, "_");
  axios
    .put(`${url}/${id}/`, quest, tokenConfig(getState))
    .then((res) => {
      console.log(res);
      dispatch(createMessage({ ResponseRejected: "Response Rejected" }));
    })
    .catch(
      (err) => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};
