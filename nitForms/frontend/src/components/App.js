import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

import AlertTemplate from "react-alert-template-basic";
import { Provider as AlertProvider } from "react-alert";

import Dashboard from "./createForm/Dashboard";
import FormName from "./createForm/FormName";
import Album from "./createForm/Album";
import Header from "./layout/Header";
import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import { loadUser } from "../actions/Auth";
import PrivateRoute from "./common/PrivateRoutes";
import CardForm from "./createForm/CardForm";

const alertOptions = {
  timeout: 3000,
  position: "top center",
  containerStyle: {
    zIndex: "9999",
  },
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <div className="container">
                <Header />
                <div className="container">
                  <Alerts />
                </div>
                <Switch>
                  <Route exact path="/" component={CardForm} />
                  <Route path="/formname" component={FormName} />
                  <Route path="/register" component={Register} />
                  <Route path="/login" component={Login} />
                  <Route path="/formfield" component={Dashboard} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
