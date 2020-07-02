import { GET_PERM } from "../actions/types";

const intitlaState = {
  userperm: [],
};

export default function (state = intitlaState, action) {
  switch (action.type) {
    case GET_PERM:
      return {
        ...state,
        userperm: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
