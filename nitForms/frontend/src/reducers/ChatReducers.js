import { GET_MESSAGE, POST_MESSAGE, PUT_MESSAGE } from "../actions/types";

const initialState = {
  Chats: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGE:
      return { ...state, Chats: action.payload.chatRoom };
    case POST_MESSAGE:
    case PUT_MESSAGE:
      return { ...state, Chats: action.payload.chatRoom };
    default:
      return state;
  }
}
