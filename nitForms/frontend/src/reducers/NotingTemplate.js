import { GET_NOTING_TEMPLATE } from "../actions/types";

const initialState = {
  NotingTemplate: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NOTING_TEMPLATE:
      return {
        ...state,
        NotingTemplate: action.payload,
      };
    default:
      return state;
  }
}
