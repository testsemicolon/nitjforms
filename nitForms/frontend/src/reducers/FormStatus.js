import {
  GET_FORM_STATUS,
  FORM_STATUS,
  GET_USER_HISTORY,
} from "../actions/types";

const initialState = {
  FormStatus: [],
  UserHistory: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FORM_STATUS:
      return {
        ...state,
        FormStatus: action.payload,
      };
    case GET_USER_HISTORY:
      return {
        ...state,
        UserHistory: action.payload,
      };
    default:
      return state;
  }
}
