import {
  GET_NOTIFICATION,
  POST_NOTIFICATION,
  CLEAR_RESPONSE,
} from "../actions/types";

const initialState = {
  Notification: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NOTIFICATION:
      return {
        ...state,
        Notification: action.payload,
      };
    case POST_NOTIFICATION:
      return {
        ...state,
        Notification: action.payload,
      };
    default:
      return state;
  }
}
