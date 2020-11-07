import axios from "axios";
import { createMessage } from "./Messages";

export const sendMail = (quest) => (dispatch) => {

  axios
    .post("EmailIndex/", quest)
    .then(axios
      .post("sendMail/").then(dispatch(createMessage({ emailSent: "Mail is sent to concerned user" }))))
    .catch((err) => console.log(err))
};
