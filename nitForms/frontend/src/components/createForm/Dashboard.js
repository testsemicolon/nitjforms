import React, { Fragment, Component } from "react";
import FormField from "./FormFields";
import AddField from "./AddField";

export default class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <AddField title={this.props.title} />
        </div>
        <hr />
        <div className="container">
          <FormField />
        </div>
      </Fragment>
    );
  }
}
