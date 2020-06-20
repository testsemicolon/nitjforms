import {
  GET_FIELD,
  DELETE_FIELD,
  ADD_FIELD,
  GET_FORM_FIELD,
} from "../actions/types";

const initialState = {
  Forms: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FIELD:
      return {
        ...state,
        Forms: action.payload,
      };
    case DELETE_FIELD:
      return {
        ...state,
        Forms: state.Forms.filter((Form) => Form.id !== action.payload),
      };
    case ADD_FIELD:
      return {
        ...state,
        Forms: [...state.Forms, action.payload],
      };
    case GET_FORM_FIELD:
      return {
        ...state,
        Forms: [action.payload],
      };
    default:
      return state;
  }
}
