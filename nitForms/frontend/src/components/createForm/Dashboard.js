import React, { Fragment, Component } from "react";
import FormField from "./FormFields";
import AddField from "./AddField";

export default function Dashboard() {
  return (
    <Fragment>
      <div className="container">
        <AddField />
      </div>
      <hr />
      <div className="container">
        <FormField />
      </div>
    </Fragment>
  );
}
