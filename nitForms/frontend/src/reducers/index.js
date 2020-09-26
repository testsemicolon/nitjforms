import { combineReducers } from "redux";
import Forms from "./CreateForm";
import FormName from "./FormName";
import Errors from "./Errors";
import Auth from "./Auth";
import Messages from "./Messages";
import AcceptedResponse from "./AcceptedResponse";
import SharedUsers from "./Common";
import NotingTemplate from "./NotingTemplate";
import Notification from "./Notification";
import FormStatus from "./FormStatus";
import Status from "./Status";

export default combineReducers({
  Forms: Forms,
  FormName: FormName,
  Auth: Auth,
  Errors: Errors,
  Messages: Messages,
  AcceptedResponse: AcceptedResponse,
  SharedUsers: SharedUsers,
  NotingTemplate: NotingTemplate,
  Notification: Notification,
  FormStatus: FormStatus,
  Status: Status,
});
