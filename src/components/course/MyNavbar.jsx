import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";


function MyNavbar(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="xl">
      <Container>
        <Navbar.Brand to="/home">E-learning</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/home" className="me-3" style={{ color: 'white',textDecoration: 'none' }}>Home</NavLink>
            <NavLink to="/allcourses"className="me-3" style={{ color: 'white' ,textDecoration: 'none'}}>Courses</NavLink>
            {/* <NavLink to="/about"className="me-3" style={{ color: 'white' ,textDecoration: 'none'}}>About us</NavLink>
            <NavLink to="/contact"className="me-3" style={{ color: 'white' ,textDecoration: 'none'}}>Contact Us</NavLink> */}

            {/* ----------------shimaa--------------------- */}
            <NavLink to="/aboutus"className="me-3" style={{ color: 'white' ,textDecoration: 'none'}}>About us</NavLink>
            <NavLink to="/contactus"className="me-3" style={{ color: 'white' ,textDecoration: 'none'}}>Contact Us</NavLink>
            {/* ----------------shimaa--------------------- */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Nav className="ms-auto"  >

              props.user.token?
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="userMenu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="userMenu">
                <NavLink className="me-2 btn btn-outline-light" to="/changePassword" variant="outline-light">Change password</NavLink>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="">Log out</a>
                </div>
              </li>
          </ul>:<NavDropdown 
              id="nav-dropdown-dark-example"
              title="Register/Login"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">
                <NavLink className="me-2 btn btn-outline-light" to="/login" variant="outline-light">Sign in</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <NavLink className="me-2 btn btn-outline-light" to="/signup" variant="outline-light">Sign Up</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              <NavLink className="" to="/logout">Logout</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto"  >
          <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dashboard"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.4">
              <NavLink className="" to="/addcourse" >Add Course</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              <NavLink className="" to="/addcategory" >Add Category</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              <NavLink className="" to="/mycourses">My Courses</NavLink>
              </NavDropdown.Item>
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