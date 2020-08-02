import React, { Component } from "react";
import axios from "axios";

export class FileUpload extends Component {
  image = null;
  handleImageChange = (e) => {
    this.image = e.target.files[0];
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const urlImage = `http://127.0.0.1:8000/media/post_images/${this.image.name}`;
    console.log(this.props.name);
    this.props.fileNameHandler(urlImage);
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
        <form>
          <p>
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
              required
            />
          </p>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default FileUpload;
