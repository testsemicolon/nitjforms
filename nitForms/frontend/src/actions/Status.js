import store from "../store";
import axios from "axios";
import { FORM_STATUS } from "./types";

export const getStatus = (ab, username) => () => {
  var arr = [];
  ab.map((title) => {
    axios.get(`/${title}`).then((res) =>
      res.filter((x) => {
        if (x.userName === username) {
          arr.push(x.formStatus);
        }
      })
    );
  });
  store.dispatch({
    type: FORM_STATUS,
    payload: arr,
  });
};
