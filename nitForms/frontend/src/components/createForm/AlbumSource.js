import React, { Component } from "react";
import AlbumUser from "./AlbumUser";
import Album from "./Album";
import AlbumAdminStaff from "./AlbumAdminStaff";
import { connect } from "react-redux";
import Albumm from "./Albumm";
import Director from "./Director";

export class AlbumSource extends Component {
  render() {
    if (this.props.userType === "Super Admin") {
      return <Albumm />;
    } else if (this.props.userType === "Admin") {
      return <AlbumAdminStaff />;
    } else if (this.props.userType === "User") {
      return <AlbumUser />;
    } else if (this.props.userType === "Director") {
      return <Director />;
    }
  }
}

const mapStateToProps = (state) => ({
  userType: state.Auth.user.userType,
});

export default connect(mapStateToProps)(AlbumSource);
