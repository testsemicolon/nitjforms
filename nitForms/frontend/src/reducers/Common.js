import { GET_SHARED_USERS } from "../actions/types";

const initialState = {
  SharedUsers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SHARED_USERS:
      return {
        ...state,
        SharedUsers: action.payload,
      };
    default:
      return state;
  }
}
