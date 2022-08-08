import axios from "axios";
import React from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";

function Video(props) {
  var video;
  axios
    .get("http://127.0.0.1:8000/video/1", {
      headers: {
        Authorization: `token ${props.user.token}`,
      },
    })
    .then((response) => {
      video = response.data;
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
      // errorSet(error.response.data[Object.keys(error.response.data)[0]]);
      // loadingSet(false);
    });
  return (
    <div>
      <ReactPlayer
        url="http://localhost:8000/media/media/video/9Properties_and_methods_%D8%A7%D9%84%D9%83%D8%AB%D9%8A%D8%B1_%D8%B9%D9%86_%D8%A7%D9%84%D8%AE%D8%B5%D8%A7%D8%A6%D8%B5_%D9%88%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D9%84_-_Android_3_%D8%AF%D9%88%D8%B1%D8%A9_%D8%A7%D9%86%D8%AF%D8%B1%D9%88%D9%8A%D8%AF.mp4"
        playing
      />
    </div>
  );
}
const mapStateToprops = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToprops)(Video);
