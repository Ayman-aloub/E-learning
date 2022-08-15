import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FileUpload from './FileUpload'
import React, { useState, useEffect } from 'react';
import './css/FileUploadStyle.css'
import axios from "axios";
import { NavLink } from 'react-router-dom'
import './css/FileUploadStyle.css'
function AddOld() {
  const [cats,setCats]=useState([]);
  const [file, setFile] = useState();
  const [courseData,setCourseData]=useState({
    course_name:'',
    course_description:'',
    course_category:'',
    course_image:'',
    course_instructor:'',
    course_rate:'',
    student_course_name:''
  });

  useEffect(()=>{
    try{
      axios.get("http://localhost:8000/category/list/")
      .then((res)=>{
        setCats(res.data)
        console.log("yaraaaaaaaaaaaab:",res.data);
      });
    }catch(error){
      console.log(error);
    }
  },[]);

  const handleChange=(event)=>{
    setCourseData({
      ...courseData,
      [event.target.name]:event.target.value
    })
  };

  const handleFileChange=(event)=>{
    setCourseData({
      ...courseData,
      [event.target.name]:event.target.files[0]
    })
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const formSubmit=(event)=>{
    event.preventDefault()
    console.log("dddd")
    const _formData = new FormData();
          _formData.append('course_name',courseData.course_name);
          _formData.append('course_description',courseData.course_description);
          _formData.append('course_instructor',courseData.course_instructor);
          _formData.append('course_category',courseData.course_category);
          _formData.append('course_image',courseData.course_image,courseData.course_image.name);
          _formData.append('course_rate',courseData.course_rate);
          console.log(_formData)
    try{
      axios.post("http://localhost:8000/course/rest/generics/",_formData,{
          // "course_name": "bbbb",
          // "course_description": "nmmm",
          // "course_image": event.target.course_image.files[0], 
          // "course_category": 2,
          // "course_instructor": 2, 
          // "course_rate": 2, 
          headers:{
            'content-type':'multipart/form-data',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(courseData)
        
      }).then((res)=>{
        console.log(res.data);
        
        
      }
      )
    }catch(error){
        // console.log(error.response.data[Object.keys(error.response.data)[0]]);
    }
  }
  return (
    <div className='container mt-4 w-75'>
      <div className='bg-secondary'> <h1>Add New Course</h1></div>
      
      <Form onSubmit={formSubmit}>
        <Form.Group className="  my-3 " >
          <Form.Label className='float-start'><h5>Course Title:</h5></Form.Label>
          <Form.Control  type="text" placeholder="Enter Course Title"  name="course_name" onChange={handleChange}/>
        
        </Form.Group>

        <Form.Group className="mb-3 " >
          <Form.Label className='float-start'><h5>Course Description:</h5></Form.Label>
          <Form.Control  type="textarea" placeholder="Enter Course Description" name="course_description" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3 " >
          <Form.Label className='float-start'><h5>Course Rate:</h5></Form.Label>
          <Form.Control  type="number" placeholder="Enter Course Rate from 1:5" name="course_rate" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label className='float-start' name="cat_name"><h5>Course Category:</h5></Form.Label>
          <Form.Select aria-label="Default select example" name="course_category" id="category" onChange={handleChange}>
            {cats.map((category,index)=>{return <option key={index} value={category.id}>{category.cat_name}</option>})}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 ms-0" >
          <Form.Label className='float-start'><h5>Course Image:</h5></Form.Label>
          <Form.Control  type="file" accept="image/*" placeholder="select image" name="course_image" onChange={handleFileChange} />
          <img src={file} className='inputimg'/>
        </Form.Group>

   
        <Form.Group className="mb-3 mt-1" >
          <Form.Label className='float-start'><h5>Course Instructor:</h5></Form.Label>
          <Form.Control  type="text" placeholder="Enter instructor name" name="course_instructor" onChange={handleChange}/>
        </Form.Group>

        
        <input type="submit" onChange={formSubmit}/>
        
        
      </Form>
    </div>
  );
}

export default AddOld;

