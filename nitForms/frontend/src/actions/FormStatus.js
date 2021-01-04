import axios from "axios";
import { GET_FORM_STATUS, GET_USER_HISTORY } from "./types";

export const getFormStatus = () => (dispatch) => {
  axios
    .get("/formIndex")
    .then((res) => {
      dispatch({
        type: GET_FORM_STATUS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const postFormStatus = (quest) => (dispatch) => {
  console.log(quest);
  axios.post("/formIndex/", quest).then((res) => {
    console.log(res);
  });
};

export const putFormStatus = (quest, id) => (dispatch) => {
  axios.put(`/formIndex/${id}/`, quest).then((res) => {
    console.log(res);
  });
};

export const getUserHistory = (username) => (dispatch) => {
  var userHistory = [];
  axios
    .get("/formIndex")
    .then((res) => {
      console.log(res.data);
      var data = {};
      data = res.data.filter((stats) => stats.userName === username);

      dispatch(getDetailedUserHistory(data, userHistory));
      // dispatch({
      //   type: GET_USER_HISTORY,
      //   payload: data,
      // });
    })
    .catch((err) => console.log(err));
};

export const getDetailedUserHistory = (data, userHistory) => (dispatch) => {
  data.map((responseData) => {
    if (responseData.responseAcceptedStatus === "Accepted") {
      var singleResponse = {};
      axios
        .get(`/${responseData.formName}Accepted`)
        .then((res) => {
          singleResponse = res.data.filter(
            (entry) => entry.acceptedResponseID === responseData.responseID
          );
          singleResponse.map((s1) => (s1["formName"] = responseData.formName));

          console.log(singleResponse);
          userHistory.push(singleResponse);
          dispatch({
            type: GET_USER_HISTORY,
            payload: userHistory,
          });
        })
        .catch((err) => console.log(err));
    }
  });
};
