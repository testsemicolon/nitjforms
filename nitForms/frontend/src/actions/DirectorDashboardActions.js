import axios from "axios";
import { GET_DEPT_DETAILS, POST_DEPT_DETAILS, PUT_DEPT_DETAILS } from "./types";

export const getDeptDetails = () => (dispatch) => {
  axios
    .get("/DepartmentDetail")
    .then((res) => {
      dispatch({
        type: GET_DEPT_DETAILS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const postDeptDetails = (questDept) => (dispatch) => {
  axios
    .post("/DepartmentDetail/")
    .then((res) => {
      dispatch({ type: POST_DEPT_DETAILS, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const putDeptDetails = (questDept) => (dispatch) => {
  axios
    .put("/DepartmentDetail/1/", questDept)
    .then((res) => {
      dispatch({ type: PUT_DEPT_DETAILS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
