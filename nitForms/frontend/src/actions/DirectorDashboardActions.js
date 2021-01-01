import axios from "axios";
import {
  GET_DEPT_DETAILS,
  POST_DEPT_DETAILS,
  PUT_DEPT_DETAILS,
  PUT_DEPT_DETAILS_COMMIT,
} from "./types";

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

export const putDeptDetailsCommit = (deptName, amount, responseType) => (
  dispatch
) => {
  axios
    .get("/DepartmentDetail")
    .then((res) => {
      var deptDetail;
      res.data.map((detail) => {
        if (detail.deptName === deptName) {
          deptDetail = detail;
        }
      });
      if (responseType === "Accept") {
        console.log(responseType);
        deptDetail["recommendedAmount"] =
          parseInt(deptDetail["recommendedAmount"]) - parseInt(amount);
        deptDetail["committedAmount"] =
          parseInt(deptDetail["committedAmount"]) + parseInt(amount);
        console.log(deptDetail, amount);
      }
      console.log(deptDetail);
      axios
        .put(`/DepartmentDetail/${deptDetail.id}/`, deptDetail)
        .then((res) => {
          dispatch({
            type: PUT_DEPT_DETAILS_COMMIT,
            payload: res.data,
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

export const putDeptDetails = (questDept) => (dispatch) => {
  axios
    .put(`/DepartmentDetail/${questDept.id}/`, questDept)
    .then((res) => {
      dispatch({ typr: PUT_DEPT_DETAILS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
