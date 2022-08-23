import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {useEffect,useState} from 'react'

function MyNavbar(props) {
  // -----------------------------search----------------------------
  // const [searchString,setsearchString]=useState({
  //   'search':''
  // });
  // const handleChange=(event)=>{
  //   setsearchString({
  //     ...searchString,
  //     [event.target.name]:event.target.value
  //   })
  // }
  // const searchCourse =()=>{
  //   if(searchString.search !=''){
  //     window.location.href='/searchcourse/'+searchString.search
  //   }
  // }
  // -----------------------------search----------------------------
  let studentDropdown = [{ label: "My Courses", path: "/mycourses" }];
  let instructorDropdown = [
    { label: "Add Course", path: "/addcourse" },
    { label: "Add Category", path: "/addcategory" },
    { label: "My Courses", path: "/mycourses" },
  ];

  let loggedIn = [{ label: "Logout", path: "/logout" }];
  let notLoggedIn = [
    { label: "Sign in", path: "/login" },
    { label: "Sign up", path: "/regesteration" },
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="xl">
      <Container>
        <Navbar.Brand to="/home">E-learning</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/home"
              className="me-3"
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </NavLink>
            <NavLink
              to="/allcourses"
              // className="me-3"
              className={
                props.user.is_staff === "false" ? "d-block me-3" : "d-none"
              }
              style={{ color: "white", textDecoration: "none" }}
            >
              Courses
            </NavLink>

            {/* ----------------shimaa--------------------- */}
            <NavLink
              to="/aboutus"
              className="me-3"
              style={{ color: "white", textDecoration: "none" }}
            >
              About us
            </NavLink>
            <NavLink
              to="/contactus"
              className="me-3"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact Us
            </NavLink>
            {/* ----------------shimaa--------------------- */}
          </Nav>
          {/* -----------------------------search---------------------------- */}
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search by course Title"
              className="me-2 "
              aria-label="Search"
              name='search'
              onChange={handleChange}
            />
            <Button onClick={searchCourse} variant="outline-info" className='btn btn-primary text-white'>Search</Button>
          </Form> */}
          {/* -----------------------------search---------------------------- */}
          <Nav className="ms-auto">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={props.user.token ? props.user.username : "Register/Login"}
              menuVariant="dark"
            >
              {props.user.token
                ? loggedIn.map((e, index) => {
                    return (
                      <NavDropdown.Item href="#action/3.4">
                        <NavLink className="" to={e.path}>
                          {e.label}
                        </NavLink>
                      </NavDropdown.Item>
                    );
                  })
                : notLoggedIn.map((e, index) => {
                    return (
                      <NavDropdown.Item href="#action/3.1">
                        <NavLink
                          className="me-2 btn btn-outline-light"
                          to={e.path}
                          variant="outline-light"
                        >
                          {e.label}
                        </NavLink>
                      </NavDropdown.Item>
                    );
                  })}
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dashboard"
              menuVariant="dark"
              className={props.user.token ? "d-block" : "d-none"}
            >
              {props.user.is_staff === "true"
                ? instructorDropdown.map((e, index) => {
                    return (
                      <NavDropdown.Item href="#action/3.4" key={index}>
                        <NavLink
                          to={e.path}
                          className="me-3"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          {e.label}
                        </NavLink>
                      </NavDropdown.Item>
                    );
                  })
                : studentDropdown.map((e, index) => {
                    return (
                      <NavDropdown.Item href="#action/3.4" key={index}>
                        <NavLink
                          to={e.path}
                          className="me-3"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          {e.label}
                        </NavLink>
                      </NavDropdown.Item>
                    );
                  })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const mapStateToprops = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToprops)(MyNavbar);
