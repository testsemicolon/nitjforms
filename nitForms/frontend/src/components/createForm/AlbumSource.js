import React, { Component } from "react";
import AlbumUser from "./AlbumUser";
import Album from "./Album";
import AlbumAdminStaff from "./AlbumAdminStaff";
import { connect } from "react-redux";
import Albumm from "./Albumm";
import Director from "./Director";

export class AlbumSource extends Component {
  render() {
    if (this.props.canGenerateForm && this.props.canMakeNoting) {
      return <Albumm />;
    } else if (this.props.canMakeNoting) {
      return <AlbumAdminStaff />;
    } else {
      return <AlbumUser />;
    }
  }
}

const mapStateToProps = (state) => ({
  canGenerateForm: state.Auth.user.can_generate_form,
  canMakeNoting: state.Auth.user.can_make_noting,
});

export default connect(mapStateToProps)(AlbumSource);
