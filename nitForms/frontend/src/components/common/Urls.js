import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import { connect } from "react-redux";

import Dashboard from "../createForm/Dashboard";
import FormName from "../createForm/FormName";
import Album from "../createForm/Album";

import Login from "../accounts/Login";
import Register from "../accounts/Register";
import PublishForm from "../createForm/PublishForm";
import CardForm from "../createForm/CardForm";
import { getName } from "../../actions/FormName";
import PrivateRoute from "./PrivateRoutes";
import { OldForms } from "../createForm/OldForms";
import GenericForm from "../createForm/GenericForm";
import GenericResponses from "../createForm/GenericResponses";
import ViewIndividualResponse from "../createForm/ViewIndividualResponse";
import AcceptedResponses from "../createForm/AcceptedResponses";
import Steps from "../createForm/Steps";
import AlbumUser from "../createForm/AlbumUser";
import TimeLine from "../createForm/TimeLine";
import AlbumSource from "../createForm/AlbumSource";
import NotingSlate from "../createForm/NotingSlate";
import AdminSuperSteps from "../createForm/AdminSuperSteps";
import FileUpload from "../createForm/FileUpload";
import CombinedView from "../createForm/CombinedView";
import DefineSteps from "../createForm/DefineSteps";
import PreviousForms from "../createForm/PreviousForms";
import ViewResponseNoteGenerate from "../createForm/ViewResponseNoteGenerate";
export class Urls extends Component {
  constructor(props) {
    super(props);
    this.props.getName();
  }
  render() {
    return (
      <Fragment>
        <PrivateRoute exact path="/" component={AlbumSource} />
        <PrivateRoute path="/formname" component={Steps} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/timeline" component={TimeLine} />
        <PrivateRoute path="/previousforms" component={PreviousForms} />
        <PrivateRoute path="/definingsteps" component={DefineSteps} />
        <PrivateRoute path="/combine/:id" component={CombinedView} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/publish" component={PublishForm} />
        <PrivateRoute path="/card" component={CardForm} />
        <PrivateRoute path="/steps" component={Steps} />
        <PrivateRoute path="/old" component={OldForms} />
        <PrivateRoute path="/slate" component={NotingSlate} />
        <PrivateRoute path="/posts" component={FileUpload} />
        <PrivateRoute path="/accepted/:title" component={AcceptedResponses} />
        <PrivateRoute
          path="/viewindividualresponse/:value/:title"
          component={ViewIndividualResponse}
        />
        <PrivateRoute
          path="/viewresponsenotegenerate/:value/:title/:id"
          component={ViewResponseNoteGenerate}
        />

        {this.props.FormName.map((formname) => (
          <PrivateRoute
            key={formname.id}
            path={`/response/${formname.title}`}
            component={() => (
              <GenericResponses
                title={formname.title}
                created_by={formname.created_by}
              />
            )}
          />
        ))}
        {this.props.FormName.map((formname) => (
          <PrivateRoute
            key={formname.id}
            path={`/${formname.title}`}
            component={() => (
              <GenericForm
                title={formname.title}
                description={formname.description}
              />
            )}
          />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  FormName: state.FormName.FormName,
});

export default connect(mapStateToProps, { getName })(Urls);
