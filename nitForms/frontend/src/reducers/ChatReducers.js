import { GET_MESSAGE, POST_MESSAGE } from "../actions/types";

const initialState = {
  Chats: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGE:
      return { ...state, Chats: action.payload };
    case POST_MESSAGE:
      return { ...state, Chats: action.payload };
    default:
      return state;
  }
}
