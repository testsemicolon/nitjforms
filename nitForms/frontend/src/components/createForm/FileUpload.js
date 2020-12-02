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
    this.props.fileNameHandler(urlImage, this.props.name);
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
      <div>
        <form>
          <p>
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
              required
            />

            <button
              onClick={this.handleSubmit}
              style={{
                background: "#e0777d",
                boxShadow: ".3vw .3vw .3vw lightgray",
                color: "#fff",
                flex: "1",
                // paddingLeft: ".5vw",
                // paddingRight: ".5vw",
                paddingLeft: "1.3vw",
                paddingRight: "1.3vw",
                paddingTop: ".4vw",
                paddingBottom: ".4vw",
                borderRadius: ".3rem",
                borderWidth: "0rem",
                display: "flex",
                marginLeft: "auto",
                fontFamily: "Times New Roman",
              }}
            >
              Upload
            </button>
          </p>
        </form>
      </div>
    );
  }
}
export default FileUpload;
