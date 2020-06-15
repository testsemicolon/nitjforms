import React, { Fragment } from "react";
import FormField from "./FormFields";
import AddField from "./AddField";
import { Link } from "react-router-dom";

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
