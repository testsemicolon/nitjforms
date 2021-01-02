import {
  GET_RESPONSE,
  GET_MULTIPLE_RESPONSE,
  CLEAR_RESPONSE,
} from "../actions/types";

const initialState = {
  Response: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RESPONSE:
      return {
        ...state,
        Response: action.payload.filter(
          (data1) => data1.acceptedResponseID === action.id
        ),
      };
    case GET_MULTIPLE_RESPONSE:
      var response = {};
      response = action.payload.filter(
        (data1) => data1.acceptedResponseID === action.id
      );
      response.map((res) => {
        res["formName"] = action.title;
        res["link"] = action.linkToPage;
      });
      return {
        ...state,
        Response: [...state.Response, response],
      };
    case CLEAR_RESPONSE:
      return {
        Response: [],
      };
    default:
      return {
        ...state,
      };
  }
}
