import { GET_DEPT_DETAILS } from "../actions/types";

const initialState = {
  DepartmentDetail: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DEPT_DETAILS:
      return {
        ...state,
        DepartmentDetail: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
