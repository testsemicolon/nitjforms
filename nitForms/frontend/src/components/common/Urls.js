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

export class Urls extends Component {
  constructor(props) {
    super(props);
    this.props.getName();
  }
  render() {
    return (
      <Fragment>
        <PrivateRoute exact path="/" component={Album} />
        <PrivateRoute path="/formname" component={FormName} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/formfield" component={Dashboard} />
        {/* <PrivateRoute path="/publish" component={PublishForm} /> */}
        <PrivateRoute path="/card" component={CardForm} />
        <PrivateRoute path="/old" component={OldForms} />
        {this.props.FormName.map((formname) => (
          <PrivateRoute
            key={formname.id}
            path={`/${formname.title}`}
            component={() => <GenericForm title={formname.title} />}
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
