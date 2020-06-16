import { ADD_NAME, GET_NAME, GET_FORM_TITLE } from "../actions/types";

const initialState = {
  FormName: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NAME:
      return {
        ...state,
        FormName: action.payload,
      };
    case ADD_NAME:
      return {
        ...state,
        FormName: [...state.FormName, action.payload],
      };
    case GET_FORM_TITLE:
      return {
        ...state,
        FormName: action.payload,
      };
    default:
      return state;
  }
}
