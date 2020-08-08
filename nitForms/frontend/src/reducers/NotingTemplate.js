import { GET_NOTING_TEMPLATE, POST_NOTING_TEMPLATE } from "../actions/types";

const initialState = {
  NotingTemplate: [],
  uuid1: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NOTING_TEMPLATE:
      return {
        NotingTemplate: action.payload,
      };
    case POST_NOTING_TEMPLATE:
      return {
        uuid1: action.payload,
      };
    default:
      return state;
  }
}
