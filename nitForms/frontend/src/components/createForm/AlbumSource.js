import React, { Component } from "react";
import AlbumUser from "./AlbumUser";
import Album from "./Album";

export default class AlbumSource extends Component {
  render() {
    return (
      <div>
        <Album />
        <AlbumUser />
      </div>
    );
  }
}
