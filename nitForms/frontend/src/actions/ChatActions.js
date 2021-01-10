import axios from "axios";
import { GET_MESSAGE, POST_MESSAGE, PUT_MESSAGE } from "./types";
import store from "../store";

// export const getMessage = async (id) => (dispatch) => {
//   console.log("sdas");
//   var messages = [];

//   axios
//     .get("/ChatSystem")
//     .then((res) => {
//       messages = res.data.filter((mes) => mes.acceptedResponseID === id);
//       dispatch({
//         type: GET_MESSAGE,
//         payload: messages,
//       });
//       messageList = messages;
//     })
//     .catch((err) => console.log(err));
//   return res.data;
// };

export const getMessage = async (id) => {
  const res = await axios.get("/ChatSystem");
  // .then((res) => {
  //   messages = res.data.filter((mes) => mes.acceptedResponseID === id);
  //   store.dispatch({
  //     type: GET_MESSAGE,
  //     payload: messages,
  //   });
  // })
  // .catch((err) => console.log(err));

  return res.data;
};

export const postMessage = (quest) => (dispatch) => {
  var foundFlag = false;
  var foundId;
  axios.get("/ChatSystem").then((res) => {
    res.data.map((resi) => {
      if (resi.acceptedResponseID === quest.acceptedResponseID) {
        foundFlag = true;
        foundId = resi.id;
      }
    });
    if (foundFlag) {
      axios.put(`/ChatSystem/${foundId}/`, quest).then((resPut) => {
        dispatch({ type: PUT_MESSAGE, payload: resPut.data });
      });
    } else {
      axios.post("/ChatSystem/", quest).then((resPost) => {
        dispatch({ typ: POST_MESSAGE, payload: resPost.data });
      });
    }
  });
};
