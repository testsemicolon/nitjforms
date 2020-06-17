import { combineReducers } from "redux";
import Forms from "./CreateForm";
import FormName from "./FormName";
import Errors from "./Errors";
import Auth from "./Auth";
import Messages from "./Messages";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  Forms: Forms,
  FormName: FormName,
  Auth: Auth,
  Errors: Errors,
  Messages: Messages,
  form: formReducer,
});
