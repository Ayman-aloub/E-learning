import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ResetCode() {
  const [confirmpass, confirmpasswordSet] = useState({
    check: false,
    meseage: "",
  });
  const [error, errorSet] = useState("");
  const [loading, loadingSet] = useState(false);
  //   const [success, sucessSet] = useState(false);

  function confirmtoggle() {
    var password = document.getElementsByName("confirmpassword");
    // console.log(password[0]);
    password[0].type = password[0].type == "password" ? "text" : "password";
  }
  function newtoggle() {
    var password = document.getElementsByName("Newpassword");
    // console.log(password[0]);
    password[0].type = password[0].type == "password" ? "text" : "password";
  }
  let navigate = useNavigate();
  const LoginFormHandler = (event) => {
    event.preventDefault();
    loadingSet(false);
    var { code, Newpassword, confirmpassword } = event.target;
    let token = localStorage.getItem("token");
    let username = localStorage.getItem("username");
    if (Newpassword.value != confirmpassword.value) {
      confirmpasswordSet({
        check: true,
        meseage: "not the same with password",
      });
    } else {
      confirmpasswordSet({
        check: false,
        meseage: "",
      });
      axios
        .put(
          "http://127.0.0.1:8000/auth/resetpasswordcode/",
          {
            code: code.value,
            username: username,
            new_password: Newpassword.value,
          },
          { headers: { Authorization: `token ${token}` } }
        )
        .then((response) => {
          console.log(response);
          loadingSet(false);
          navigate(`/login`);
        })
        .catch((error) => {
          errorSet(error.response.data[Object.keys(error.response.data)[0]]);
          loadingSet(false);
        });
    }
  };
  return (
    <div className="full-height bg-light container-fluid w-100 d-flex justify-content-center text-start align-items-center">
      <div className="col-sm-8 col-md-6 col-lg-4 bg-white p-3">
        <Form onSubmit={LoginFormHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter code"
              name="code"
              pattern="[0-9]{7}"
              title="code contain 7 digits"
              required
            />
            <Form.Text className="text-muted">
              we sent the code check your mail
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>new Password</Form.Label>
            <Form.Control
              type="password"
              name="Newpassword"
              placeholder="new Password"
              pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,15}"
              required
            />
            <Form.Group className="my-3">
              <Form.Check
                type="checkbox"
                label="Show Password"
                onClick={newtoggle}
              />
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmpassword"
              placeholder="confirm Password"
              pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,15}"
              required
            />
            {confirmpass.check && (
              <div className="alert alert-danger">{confirmpass.meseage}</div>
            )}
            <Form.Group className="my-3">
              <Form.Check
                type="checkbox"
                label="Show Password"
                onClick={confirmtoggle}
              />
            </Form.Group>
          </Form.Group>
          {error.length > 0 && (
            <div className="alert alert-danger">{error}</div>
          )}
          {loading ? (
            <div className="spinner-border text-info" role="status"></div>
          ) : (
            <Button variant="primary" type="submit">
              Submit
            </Button>
          )}
        </Form>
      </div>
    </div>
  );
}
