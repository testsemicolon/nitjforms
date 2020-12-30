import { GET_NOTIFICATION, POST_NOTIFICATION } from "../actions/types";

const initialState = {
  Notification: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NOTIFICATION:
      return {
        ...state,
        Notification: action.payload.filter(
          (notify) => notify.reciever === action.userName
        ),
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
