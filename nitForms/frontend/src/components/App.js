import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Provider, connect } from "react-redux";
import store from "../store";

import AlertTemplate from "react-alert-template-basic";
import { Provider as AlertProvider } from "react-alert";

import Dashboard from "./createForm/Dashboard";
import FormName from "./createForm/FormName";

import Header from "./layout/Header";
import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PublishForm from "./createForm/PublishForm";
import CardForm from "../components/createForm/CardForm";

import { loadUser } from "../actions/Auth";
import PrivateRoute from "./common/PrivateRoutes";
import { OldForms } from "./createForm/OldForms";
import Urls from "./common/Urls";
import "../components/test.css";

const alertOptions = {
  timeout: 3000,
  position: "top center",
  containerStyle: {
    zIndex: "9999",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    // this.props.getName();
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <div className="container-fluid">
                <Header />
                <div className="container-fluid">
                  <Alerts />
                </div>
                <Switch>
                  <Urls />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  FormName: state.FormName.FormName,
});

ReactDOM.render(<App />, document.getElementById("app"));
