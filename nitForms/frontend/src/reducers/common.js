import { GET_PERM } from "../actions/types";

const initialState = {
  Userperm: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PERM:
      return {
        ...state,
        Userperm: action.payload,
      };
    default:
      return state;
  }
}
