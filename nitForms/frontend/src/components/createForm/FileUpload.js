import React, { Component } from "react";
import axios from "axios";

export class FileUpload extends Component {
  image = null;
  handleImageChange = (e) => {
    this.image = e.target.files[0];
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let form_data = new FormData();
    form_data.append("image", this.image, this.image.name);

    let url = "http://localhost:8000/posts/";
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
              required
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default FileUpload;
