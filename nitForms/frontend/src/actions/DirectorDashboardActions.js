import axios from "axios";
import { GET_DEPT_DETAILS } from "./types";

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
