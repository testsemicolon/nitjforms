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
  var deptDetail;
  axios
    .get("/DepartmentDetail")
    .then((res) => {
      res.data.map((detail) => {
        if (detail.deptName === deptName) {
          deptDetail = detail;
        }
      });
      if (responseType === "Accept") {
        //isko then mai hi use krna hai, taki data aane k baad hi aage chle, vrna firse async chlega
        deptDetail["committedAmount"] =
          parseInt(deptDetail["committedAmount"]) + parseInt(amount);
        deptDetail["recommendedAmount"] =
          parseInt(deptDetail["recommendedAmount"]) - parseInt(amount);
      }
      console.log(deptDetail);
      dispatch(putDeptDetails(deptDetail));
    })
    .catch((err) => console.log(err));

  // axios
  //   .put(`/DepartmentDetail/${deptDetail.id}/`, deptDetail)
  //   .then((res) => {
  //     dispatch({
  //       type: PUT_DEPT_DETAILS_COMMIT,
  //       payload: res.data,
  //     });
  //   })
  //   .catch((err) => console.log(err));
};

export const putDeptDetails = (questDept) => (dispatch) => {
  console.log("hello");
  axios
    .put(`/DepartmentDetail/${questDept.id}/`, questDept)
    .then((res) => {
      // dispatch({
      // type: PUT_DEPT_DETAILS,
      // payload: res.data,
      // });
    })
    .catch((err) => console.log(err));
};
