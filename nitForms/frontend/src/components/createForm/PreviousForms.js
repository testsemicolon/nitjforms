import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { getName, updateName } from "../../actions/FormName";
import { Link } from "react-router-dom";

class PreviousForms extends Component {
  state = { status: false };
  constructor(props) {
    super(props);
    this.props.getName();
  }
  static = {
    FormName: PropTypes.array.isRequired,
  };

  onClick = () => {
    console.log("adas");
    // quest["activationStatus"] = !quest.activationStatus;
    // console.log(id, quest);
    // this.props.updateName();
  };

  render() {
    return (
      <Fragment>
        {this.props.FormName.map((card) => {
          if (this.props.username === card.created_by) {
            return (
              <div key={card.id} style={{ backgroundColor: "pink" }}>
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
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      card.activationStatus = !card.activationStatus;
                      this.props.updateName(card.id, card);
                      this.setState({ status: !this.state.status });
                      console.log(card);
                    }}
                  >
                    Activate
                  </Button>
                  {this.state.status === true ? "tick" : " cross"}
                </div>
              </div>
            );
          }
        })}
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  FormName: state.FormName.FormName,
  username: state.Auth.user.username,
});

export default connect(mapStateToProps, { getName, updateName })(PreviousForms);
