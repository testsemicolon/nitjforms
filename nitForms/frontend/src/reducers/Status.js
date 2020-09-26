import { FORM_STATUS } from "../actions/types";

const initialState = {
  Status: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FORM_STATUS:
      return {
        ...state,
        FormStatus: action.payload,
      };
    default:
      return state;
  }
}
