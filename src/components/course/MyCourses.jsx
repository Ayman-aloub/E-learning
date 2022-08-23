import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDocumentTitle } from "./setDocumentTitle";
import "./css/CardImage.css";
import handleDelete from "./DeleteCourse";
import { connect } from "react-redux";

function MyCourses(props) {
  const [document_title, setDoucmentTitle] = useDocumentTitle("My Courses");
  let [courses, setCourses] = useState([]);

  function getMyCourses() {
    var url = "";
    if (props.user.is_staff === "true") {
      url = `https://ammaryasser.pythonanywhere.com/course/instructorcourses/`;
    } else {
      url = `https://ammaryasser.pythonanywhere.com/course/studentcourses/`;
    }

    console.log("url = ",url)
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${props.user.token}`,
        },
      })
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getMyCourses();
  }, [props.user.token]);

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
    <div>
      {props.user.is_staff === "true" ? (
        <div className="alert alert-light p-5 ">
          <h1 className="text-center ">My Courses </h1>
          <div className="container ">
            <div className="row g-3 mx-auto">
              {courses.map((course) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12 text-center pt-2">
                    <Card style={{ width: "18rem" }} className="me-3 mt-3">
                      <Card.Img
                        variant="top"
                        src={course.course_image}
                        className="rounded course_image"
                        alt={course.course_name}
                      />
                      <Card.Body>
                        <Card.Title>
                          Course Title:{course.course_name}
                        </Card.Title>
                        <Card.Text className=" mt-3">
                          <p>
                            Course Cotegory:{course.course_category.cat_name}
                          </p>
                        </Card.Text>
                        <NavLink
                          to={`/detail/${course.id}`}
                          className=" btn btn-primary mb-2 me-2"
                        >
                          {" "}
                          Show Details
                        </NavLink>
                        <NavLink to={`/uploadvideo/${course.id}`} className="btn btn-primary mb-2">
                          {" "}
                          Add Video
                        </NavLink>
                        <div className="f-flex">
                          <NavLink
                            to={`/update/${course.id}`}
                            className=" btn btn-primary me-2"
                          >
                            {" "}
                            update
                          </NavLink>
                          <NavLink
                            to={`/delete/${course.id}`}
                            className=" btn btn-danger ms-2"
                          >
                            {" "}
                            delete
                          </NavLink>
                          {/* <button onClick={handleDelete} className=" btn btn-danger ms-2">delete</button> */}
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="alert alert-light p-5 ">
          <h1 className="text-center ">My Courses </h1>
          <div className="container ">
            <div className="row g-3 mx-auto">
              {courses.map((course) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12 text-center pt-2">
                    <Card style={{ width: "18rem" }} className="me-3 mt-3">
                      <Card.Img
                        variant="top"
                        src={course.course_image}
                        className="rounded course_image"
                        alt={course.course_name}
                      />
                      <Card.Body>
                        <Card.Title>
                          Course Title:{course.course_name}
                        </Card.Title>
                        <Card.Text className=" mt-3">
                          <p>Course Cotegory:{course.course_category}</p>
                        </Card.Text>
                        <NavLink
                          to={`/detail/${course.id}`}
                          className=" btn btn-primary mb-2 me-2"
                        >
                          {" "}
                          Show Details
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
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
    // <div className="alert alert-light p-5 ">
    //   <h1 className="text-center ">My Courses </h1>
    //   <div className="container ">
    //     <div className="row g-3 mx-auto">
    //       {courses.map((course) => {
    //         return (
    //           <div className="col-lg-4 col-md-6 col-sm-12 text-center pt-2">
    //             <Card style={{ width: "18rem" }} className="me-3 mt-3">
    //               <Card.Img
    //                 variant="top"
    //                 src={course.course_image}
    //                 className="rounded course_image"
    //                 alt={course.course_name}
    //               />
    //               <Card.Body>
    //                 <Card.Title>Course Title:{course.course_name}</Card.Title>
    //                 <Card.Text className=" mt-3">
    //                   <p>Course Cotegory:{course.course_category}</p>
    //                 </Card.Text>
    //                 <NavLink
    //                   to={`/detail/${course.id}`}
    //                   className=" btn btn-primary mb-2 me-2"
    //                 >
    //                   {" "}
    //                   Show Details
    //                 </NavLink>
    //                 <button
    //                   className=" btn btn-primary mb-2 ms-2"
    //                   name="enroll"
    //                   value={course.id}
    //                   onClick={enroll}
    //                 >
    //                   {" "}
    //                   Enroll
    //                 </button>
    //                 <div className="f-flex">
    //                   <NavLink
    //                     to={`/update/${course.id}`}
    //                     className=" btn btn-primary me-2"
    //                   >
    //                     {" "}
    //                     update
    //                   </NavLink>
    //                   <NavLink
    //                     to={`/delete/${course.id}`}
    //                     className=" btn btn-danger ms-2"
    //                   >
    //                     {" "}
    //                     delete
    //                   </NavLink>
    //                   {/* <button onClick={handleDelete} className=" btn btn-danger ms-2">delete</button> */}
    //                 </div>
    //               </Card.Body>
    //             </Card>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
}

const mapStateToprops = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToprops)(MyCourses);
