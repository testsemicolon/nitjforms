import { GET_RESPONSE } from "../actions/types";

const initialState = {
  Response: [],
  formName: "",
  link: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RESPONSE:
      return {
        ...state,
        Response: action.payload.filter(
          (data1) => data1.acceptedResponseID === action.id
        ),
        formName: action.formName,
        link: action.link,
      };
    default:
      return {
        ...state,
      };
  }
}
