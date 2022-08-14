import React from "react";
import "./css/MyFooterstyle.css";
function MyFooter() {
  return (
    <footer>
      <div className="footer-content">
        <img src={require("./img/Footer-logo.png")} className="logo" alt="" />
        <div className="footer-ul-container">
          <ul className="category">
            <li className="category-title">
              <a href="#!" className="footer-link">
                Courses
              </a>
            </li>
          </ul>
          <ul className="category">
            <li className="category-title">
              <a href="#!" className="footer-link">
                Instructors
              </a>
            </li>
          </ul>
          <ul className="category">
            <li className="category-title">
              <a href="#!" className="footer-link">
                Student
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-title">about company</p>
      <p className="info">
      We are an e-learning website that aims to increase educational opportunities and provide the capabilities 
      that students and teachers need in one place, making the educational process easy and enjoyableز
      </p>
      <p className="info">
        support emails - help@elearning.com, technicalsupport@online.com
      </p>
      <p className="info">telephone - 180 00 00 001, 180 00 00 002</p>
      <div className="footer-social-container">
        <div className="social-icons">
          <div>
            <a href="#!" className="social-link">
              terms & services
            </a>
            <a href="#!" className="social-link">
              privacy page
            </a>
          </div>
          <div>
            <a href="#!" className="social-link">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#!" className="social-link">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#!" className="social-link">
              <i className="fa fa-twitter-square"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="footer-credit">E-learning, the best place to learn online</p>
    </footer>
  );
}


export default MyFooter