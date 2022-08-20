// import Button from 'react-bootstrap/Button';
import './css/CardImage.css'
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";


//http://127.0.0.1:8000/assignment/updategrad/9 


export default function AllAssignment() {
  let [assignments,setCourses] = useState([]);
  const [data,setData]=useState({
    grades:"",
  })
  let { course_id } = useParams();
  function getAllCourses(){
    console.log("course_id",course_id)
    axios.get(`http://127.0.0.1:8000/assignment/assignments/${course_id}`)
    .then((response)=>{
        setCourses(response.data);
        console.log(response.data);
    })
    .catch((error)=>{
      console.log('vvvvvvvvvvvvvvvvvvvvv')
      console.log(error);
    })
  }

// to post assignemt 
  function Postassignment(e){
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/assignment/updategrad/${e.target.custId.value}`,
    // {'grades':e.target.grades.value},
    {'grades':e.target.grades.value},
    {headers:{
      'content-type':'multipart/form-data',
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',}})
    .then((response)=>{
        setCourses(response.data);
        console.log(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    getAllCourses(); 
  },[course_id]);
  function handle(e){
    const newdata={...data}
    newdata[e.target.name]= e.target.value
    setData(newdata)
    console.log(newdata);
    
}
  return (
    <div className="alert alert-light p-5 ">
      <h1  className='text-center'>All Assignment </h1>
      <div className="container ">
        <div className="row g-3 mx-auto">
        
          {assignments.map((assignment) => {
            return(
            <>

                <div className="col-lg-4 col-md-6 col-sm-12 text-center pt-2 ">
                <img src={require('./image/pdff.png')} />
                <br/>
                <a href={'http://127.0.0.1:8000'+assignment.upload_assign} target="_new" rel="noreferrer" className='text-light bg-success ' style={{ textDecoration: 'none' }}>
                {assignment.id } - Show Assignment 
                </a>
                <br />
                <Form onSubmit={Postassignment}>
                <input type="hidden" id="custId" name="custId" value={assignment.id}/>
                <Form.Control  type="text" name="grades" placeholder="assignment grade" value={assignment.grades} onChange={(e)=>handle(e)} />
                <br />
                <input type="submit" />
                </Form>
                </div>
            </>
            );
             
          })}
          
        </div>
      </div>
    </div>
    
  )
}
