import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, Card } from "@material-ui/core";

import { OldForms } from "./OldForms";
import { getName } from "../../actions/FormName";
import { Link } from "react-router-dom";
import { getPerm } from "../../actions/common";

class PreviousForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
    this.props.getName();
    this.props.getPerm();
  }
  onclick = (e) => {
    e.preventDefault();
    this.setState({ status: !this.state.status });
  };

  static = {
    FormName: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div>
        {/* <OldForms /> */}
        {this.props.FormName.map((card) => (
          <div style={{ backgroundColor: "pink" }}>
            {card.title}
            <br />
            <hr />
            {card.description}
            <div>
              <Link to={`/${card.title}`}>
                <Button size="small" color="primary">
                  View
                </Button>
              </Link>
              <Link to={`/response/${card.title}`}>
                <Button size="small" color="primary">
                  Responses
                </Button>
              </Link>
              <Button size="small" color="primary" onClick={this.onclick}>
                Activate
              </Button>
              {this.state.status === true ? "tick" : " cross"}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  FormName: state.FormName.FormName,
  Userperm: state.Userperm.Userperm,
});

export default connect(mapStateToProps, { getPerm, getName })(PreviousForms);
