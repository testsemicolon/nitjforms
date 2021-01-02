import {
  GET_DEPT_DETAILS,
  POST_DEPT_DETAILS,
  PUT_DEPT_DETAILS,
  PUT_DEPT_DETAILS_COMMIT,
} from "../actions/types";

const initialState = {
  DepartmentDetail: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DEPT_DETAILS:
    case POST_DEPT_DETAILS:
    case PUT_DEPT_DETAILS:
    case PUT_DEPT_DETAILS_COMMIT:
      return {
        ...state,
        DepartmentDetail: action.payload,
      };
    default:
      return state;
  }
}
