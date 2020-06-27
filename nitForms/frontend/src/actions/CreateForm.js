import {
  GET_FIELD,
  DELETE_FIELD,
  ADD_FIELD,
  GET_FORM_FIELD,
  GET_FORM_VIEW,
  GET_GENERIC_RESPONSES,
} from "./types";
import axios from "axios";
import { createMessage, returnErrors } from "./Messages";
import { tokenConfig } from "./Auth";

export const getField = () => (dispatch, getState) => {
  axios
    .get("forms/", tokenConfig(getState))
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

export const addField = (quest) => (dispatch, getState) => {
  axios
    .post("forms/", quest, tokenConfig(getState))
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

export const deleteField = (id) => (dispatch, getState) => {
  axios
    .delete(`/forms/${id}/`, tokenConfig(getState))
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

export const getFormField = () => (dispatch, getState) => {
  axios
    .get("forms/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_FORM_FIELD,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getFormView = (title) => (dispatch, getState) => {
  axios
    .get("generic/")
    .then((res) => {
      dispatch({
        type: GET_FORM_VIEW,
        payload: res.data.filter((ttl) => ttl.formName === title),
      });
    })
    .catch((err) => console.log(err));
};

export const addGeneric = (formName, question, inputType) => (dispatch) => {
  const quest1 = { formName, question, inputType };
  axios.post("/generic/", quest1).catch((err) => console.log(err));
};

export const getGeneric = (title) => (dispatch) => {
  axios
    .get(`/${title}`)
    .then((res) => {
      dispatch({
        type: GET_GENERIC_RESPONSES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export default {
  getField,
  addField,
  deleteField,
  submitForm,
  getFormField,
  getGeneric,
};
