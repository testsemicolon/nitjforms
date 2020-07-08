import { GET_ACCEPTED } from "../actions/types";

const initialState = {
  AcceptedResponse: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ACCEPTED:
      return {
        ...state,
        AcceptedResponse: action.payload,
      };
    default:
      return state;
  }
}
