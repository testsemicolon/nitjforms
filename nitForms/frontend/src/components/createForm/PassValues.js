import React, { Component } from "react";
import DynamicForm from "./DynamicForm";
import { getFormField } from "../../actions/CreateForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class PassValues extends Component {
  static propTypes = {
    Forms: PropTypes.array.isRequired,
  };
  state = {
    Forms: [],
    data: [{}],
    current: {},
  };

  componentDidMount() {
    console.log("sada");
    this.props.getFormField();
  }

  onSubmit = (model) => {
    let data = [];
    if (model.id) {
      data = this.state.data.filter((d) => {
        return d.id != model.id;
      });
    } else {
      model.id = +new Date();
      data = this.state.data.slice();
      console.log(data);
    }

    this.setState({
      data: [model, ...data],
      current: {}, // todo
    });
  };

  onEdit = (id) => {
    let record = this.state.data.find((d) => {
      return d.id == id;
    });
    //alert(JSON.stringify(record));
    this.setState({
      current: record,
    });
  };

  onNewClick = (e) => {
    this.setState({
      current: {},
    });
  };

  render() {
    return (
      <div className="PassValue">
        <div className="form-actions">
          <button onClick={this.onNewClick} type="submit">
            NEW
          </button>
        </div>
        <DynamicForm
          className="form"
          title="Registration"
          model={this.props.Forms}
          onSubmit={(model) => {
            this.onSubmit(model);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Forms: state.Forms.Forms,
});

export default connect(mapStateToProps, { getFormField })(PassValues);
