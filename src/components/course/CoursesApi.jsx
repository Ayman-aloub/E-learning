import React, { useEffect, useState } from 'react'
import axios from "axios";
import {  Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CoursesApi() {
  let [courses,setCourses] = useState([]);
  function getAllCourses(){
    axios.get("http://127.0.0.1:8000/course/rest/rest/generics/")
    .then((response)=>{
        setCourses(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  useEffect(()=>{
    getAllCourses(); 
  },[]);
  return (
    <div className="alert alert-light p-5 ">
      <h1  className='text-center '>All Courses </h1>
      <div className="container ">
        <div className="row g-3 mx-auto">
          {courses.map((course) => {
            return(
            <>
                <Card style={{ width: '18rem' }} className="me-3 mt-3">
                  <Card.Body>
                    <Card.Title>Course Title:{course.course_name}</Card.Title>
                    <Card.Text  className=" mt-3">
                      <p>Course Cotegory:{course.course_category}</p>
                      <p>Course Instructor:{course.course_instructor}</p>
                    </Card.Text>
                    <NavLink to={`/courses/${course.id}`} className=" btn btn-info "> Show Details</NavLink>
                  </Card.Body>
                </Card>
            </>);
             
          })}
        </div>
      </div>
    </div>
    
  )
}
