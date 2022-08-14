import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/CardImage.css'
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useDocumentTitle} from "./setDocumentTitle"

export default function AllCourses() {
  const [document_title, setDoucmentTitle] = useDocumentTitle("All Courses");
  let [courses,setCourses] = useState([]);
  function getAllCourses(){
    axios.get(`http://localhost:8000/course/rest/generics/`)
    .then((response)=>{
        setCourses(response.data);
        console.log("yaraaaaaaab tshta8al:",response.data);
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
      <h1  className='text-center'>All Courses </h1>
      <div className="container ">
        <div className="row g-3 mx-auto">
        
          {courses.map((course) => {
            return(
            <>
              <div className="col-lg-4 col-md-6 col-sm-12 text-center pt-2 ">
                <Card style={{ width: '18rem' }} className="me-3 mt-3">
                  <Card.Img variant="top" src={course.course_image} className='rounded course_image mt-2 ms-1' alt={course.course_name}/>
                  <Card.Body>
                    <Card.Title>Course Title:{course.course_name}</Card.Title>
                    <Card.Text  className=" mt-3">
                      <p>Course Cotegory:{course.course_category}</p>
                      <p>Course Rate:{course.course_rate}</p>
                    </Card.Text>
                    <NavLink to={`/detail/${course.id}`} className=" btn btn-info me-2 "> Show Details</NavLink>
                    <NavLink to='#' className=" btn btn-primary ms-2"> Enroll</NavLink>
                  </Card.Body>
                </Card>
                </div>
            </>
            );
             
          })}
          
        </div>
      </div>
    </div>
    
  )
}
