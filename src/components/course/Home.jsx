import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import MySlider from "./MySlider"
import React, { useState, useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    document.title = `Home`;
  });
  return (
    <>
      <MySlider/>
      <div className='container mt-4'>
        <h1 className='pb-1 mb-4 ms-0'>Latest Courses</h1>
        <div className='row'>
          <div className='col-md-4'>
            {/*<Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require("./img/Footer-logo.png")} />
              <Card.Body>
                <Card.Title>Course Title</Card.Title>
                <Card.Text>
                  <p>Course Cotegory:</p>
                </Card.Text>
                <NavLink to="/detail/5"><Button variant="primary">Details</Button></NavLink>
              </Card.Body>
            </Card>*/}
          </div>
      </div>
        <NavLink to="/allcourses"><Button variant="primary">See All Courses</Button></NavLink>
        <NavLink to="/courseapi" className='ms-3'><Button variant="primary">Courses Api</Button></NavLink>
      </div>
    
    </>
      
  )
}
