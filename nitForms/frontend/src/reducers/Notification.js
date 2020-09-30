import { GET_NOTIFICATION } from "../actions/types";

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
    default:
      return state;
  }
}
