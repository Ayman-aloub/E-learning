import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import MySlider from "./MySlider";
import React, { Fragment, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = `Home`;
  });
  return (
    <>
      <MySlider/>
      <div className='container mt-4'>
        <h1 className='pb-1 mb-4 ms-0'>All Courses</h1>
        <div className='row'>
          <div className='col-md-4'>
          </div>
      </div>
        <NavLink to="/allcourses"><Button variant="primary">See All Courses</Button></NavLink>
      </div>
    
    </>
      
  )
}