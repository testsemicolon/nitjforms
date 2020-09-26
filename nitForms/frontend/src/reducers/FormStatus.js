import { GET_FORM_STATUS, FORM_STATUS } from "../actions/types";

const initialState = {
  FormStatus: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FORM_STATUS:
      return {
        ...state,
        FormStatus: action.payload,
      };
    default:
      return state;
  }
}
