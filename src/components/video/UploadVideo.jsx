import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Route, useNavigate } from "react-router-dom";
function UploadVideo(props) {
  function uploadvideosubmit(event) {
    event.preventDefault();
    console.log(event.target.url.files[0]);
    axios
      .post(
        "http://127.0.0.1:8000/video/upload",
        {
          course: parseInt(event.target.course.value),
          title: event.target.title.value,
          url: event.target.url.files[0],
        },
        {
          headers: {
            Authorization: `token ${props.user.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        // errorSet(error.response.data[Object.keys(error.response.data)[0]]);
        // loadingSet(false);
      });
  }
  return (
    <div>
      <form onSubmit={uploadvideosubmit} enctype="multipart/form-data">
        <input type="text" id="title" name="title" />
        <input type="file" id="video" name="url" />
        <input type="number" id="number" name="course" />
        <input type="submit" />
      </form>
    </div>
  );
}

const mapStateToprops = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToprops)(UploadVideo);
