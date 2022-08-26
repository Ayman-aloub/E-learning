import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./css/CardImage.css";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDocumentTitle } from "./setDocumentTitle";
import { connect } from "react-redux";

function AllCourses(props) {
  const [document_title, setDoucmentTitle] = useDocumentTitle("All Courses");
  let [courses, setCourses] = useState([]);
  function getAllCourses() {
    axios
      .get(`https://ammaryasser.pythonanywhere.com/course/rest/generics/`)
      .then((response) => {
        setCourses(response.data);
        console.log("yaraaaaaaab tshta8al:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getAllCourses();
  }, []);

  function enroll(e) {
    console.log(props.user.token);
    axios
      .get(`https://ammaryasser.pythonanywhere.com/course/enroll/${e.target.value}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${props.user.token}`,
        },
      })
      .then((res) => {
        alert(res.data.message);
      });
  }

  return (
    <div className="alert alert-light p-5 ">
      <h1 className="text-center">All Courses </h1>
      <div className="container ">
        <div className="row g-3 mx-auto">
          {courses.map((course) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center pt-2 ">
                  <Card style={{ width: "18rem" }} className="me-3 mt-3">
                    <Card.Img
                      variant="top"
                      src={course.course_image}
                      className="rounded course_image mt-2 ms-1"
                      alt={course.course_name}
                    />
                    <Card.Body>
                      <Card.Title>Course Title:{course.course_name}</Card.Title>
                      <NavLink
                        to={`/detail/${course.id}`}
                        className=" btn btn-info me-2 "
                      >
                        {" "}
                        Show Reviews
                      </NavLink> 
                      <button
                        className=" btn btn-primary mb-2 ms-2"
                        name="enroll"
                        value={course.id}
                        onClick={enroll}
                      >
                        {" "}
                        Enroll
                      </button>
                    </Card.Body>
                  </Card>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToprops = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToprops)(AllCourses);