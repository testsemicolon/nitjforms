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
import Album from "./createForm/Album";
import Header from "./layout/Header";
import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PublishForm from "./createForm/PublishForm";
import CardForm from "../components/createForm/CardForm";
import { getName } from "../actions/FormName";

import { loadUser } from "../actions/Auth";
import PrivateRoute from "./common/PrivateRoutes";
import { OldForms } from "./createForm/OldForms";

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
    this.props.getName();
  }
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
                  <PrivateRoute exact path="/" component={Album} />
                  <PrivateRoute path="/formname" component={FormName} />
                  <Route path="/register" component={Register} />
                  <Route path="/login" component={Login} />
                  <PrivateRoute path="/formfield" component={Dashboard} />
                  <PrivateRoute path="/publish" component={PublishForm} />
                  <PrivateRoute path="/card" component={CardForm} />
                  <PrivateRoute path="/old" component={OldForms} />
                  {this.props.FormName.map((formname) => (
                    <PrivateRoute
                      path={`/${formname.title}`}
                      component={PublishForm}
                    />
                  ))}
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

connect(mapStateToProps, { getName })(App);

ReactDOM.render(<App />, document.getElementById("app"));
