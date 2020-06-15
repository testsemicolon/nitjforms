import { GET_FIELD, DELETE_FIELD, ADD_FIELD, FORMS } from "./types";
import axios from "axios";
import { createMessage, returnErrors } from "./Messages";

export const getField = () => (dispatch) => {
  axios
    .get("forms/")
    .then((res) => {
      dispatch({
        type: GET_FIELD,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addField = (quest) => (dispatch) => {
  axios
    .post("forms/", quest)
    .then((res) => {
      dispatch(createMessage({ fieldAdd: "Field Added" }));
      dispatch({
        type: ADD_FIELD,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteField = (id) => (dispatch) => {
  axios
    .delete(`/forms/${id}/`)
    .then((res) => {
      dispatch(createMessage({ fieldDelete: "Field Deleted" }));
      dispatch({
        type: DELETE_FIELD,
        payload: id,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const submitForm = () => (dispatch) => {
  axios.post("post/");
};

export default { getField, addField, deleteField, submitForm };
