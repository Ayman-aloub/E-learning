import logo from "./logo.svg";
import "./App.css";
import Login from "./components/accounting/Login";
import Registeration from "./components/accounting/Registeration";
import ChangePassword from "./components/accounting/ChangePassword";
import ResetPassword from "./components/accounting/ResetPassword";
import ResetCode from "./components/accounting/ResetCode";
import { Routes, Route, Navigate } from "react-router-dom";
import UploadVideo from "./components/video/UploadVideo";

import { useEffect, useState } from "react";
import React from "react";
import { getUserFromStorage } from "./redex/actions/getUser";
import { connect } from "react-redux";
import Video from "./components/video/Video";
function App(props) {
  let { user } = props;
  useEffect(() => {
    if (!props.user.loaded) {
      props.getUserFromStorage();
      console.log(props.user);
    }
  }, [user]);
  return (
    <div className="App">
      {/* <Video />
      <UploadVideo /> */}

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/regesteration" element={<Registeration />}></Route>
        <Route path="/changePassword" element={<ChangePassword />}></Route>
        <Route path="/resetpassword" element={<ResetPassword />}></Route>
        <Route path="/resetcode" element={<ResetCode />}></Route>
      </Routes>
    </div>
  );
}
const mapdispatchtoprops = (dispatch) => {
  return {
    getUserFromStorage: () => dispatch(getUserFromStorage()),
  };
};
const mapstatetoprops = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapstatetoprops, mapdispatchtoprops)(App);
