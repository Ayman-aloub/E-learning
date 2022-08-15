import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom'
import './css/FileUploadStyle.css'
import Swal from "sweetalert2";
import { useParams } from 'react-router-dom'

export default function UpdateCourseOld() {
    let {course_id} = useParams();
    const [cats,setCats]=useState([]);
    const [file, setFile] = useState();
    const [courseData,setCourseData]=useState({
      course_name:"",
      course_description:"",
      course_rate:"",
      course_image:"",
      course_category:"",
      course_instructor:"",
      student_course_name:"",

    });

    useEffect(()=>{
        try{
          axios.get("http://localhost:8000/category/generics/category/")
          .then((res)=>{
            setCats(res.data)
            console.log("yaraaaaaaaaaaaab:",res.data);
          });
        }catch(error){
          console.log(error);
        }
        try{
            axios.get(`http://localhost:8000/course/rest/generics/${course_id}`)
            .then((res)=>{
                setCourseData({
                    course_name:res.data.course_name,
                    course_description:res.data.course_description,
                    course_category:res.data.course_category,
                    course_image:'',
                    previous_image:res.data.course_image,
                    course_instructor:res.data.course_instructor,
                    student_course_name:res.data.student_course_name,
                    course_rate:res.data.course_rate
                })
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

      const formSubmit=()=>{
        const _formData = new FormData();
        _formData.append('course_name',courseData.course_name);
        _formData.append('student_course_name',courseData.student_course_name);
        _formData.append('course_rate',courseData.course_rate);
        _formData.append('course_description',courseData.course_description);
        _formData.append('course_instructor',courseData.course_instructor);
        _formData.append('course_category',courseData.course_category);
       if(courseData.course_image!==''){
        _formData.append('course_image',courseData.course_image,courseData.course_image.name);
       }
    
        try{
          axios.put(`http://localhost:8000/course/rest/generics/${course_id}`,_formData,{
            headers:{
              'content-type':'multipart/form-data'
            }
          }).then((res)=>{
            console.log(res.data);
            if(res.status == 200){
              Swal.fire({
                title: "course data has been updated successfully",
                icon:'success',
                toast:true,
                timer:3000,
                position:'top-right',
                timerProgressBar:true,
                showConfirmButton:false
              });
            }
          });
        }catch(error){
            console.log(error);
        }
      }

  return (
    <div className='container mt-4 w-75'>
    <div className='bg-secondary'> <h1>Update Course</h1></div>
    <Form>
      <Form.Group className="  my-3 " >
        <Form.Label className='float-start'><h5>Course Title:</h5></Form.Label>
        <Form.Control  type="text" placeholder="Enter Course Title" value={courseData.course_name}  name="course_name" onChange={handleChange}/>
      
      </Form.Group>

      <Form.Group className="mb-3 " >
        <Form.Label className='float-start'><h5>Course Description:</h5></Form.Label>
        <Form.Control  type="textarea" value={courseData.course_description} name="course_description" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='float-start' name="cat_name"><h5>Course Category:</h5></Form.Label>
        <Form.Select aria-label="Default select example" name="course_category" id="category" onChange={handleChange} value={courseData.course_category}>
          {cats.map((category,index)=>{return <option key={index} value={category.id}>{category.cat_name}</option>})}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 ms-0" >
        <Form.Label className='float-start' ><h5>Course Image:</h5></Form.Label>
        <Form.Control  type="file" accept="image/*"  placeholder="select image" name="course_image" onChange={handleFileChange} />
        {courseData.previous_image &&
        <img src={courseData.previous_image} className='inputimg'/>
    }
      </Form.Group>

 
      <Form.Group className="mb-3 mt-1" >
        <Form.Label className='float-start'><h5>Course Instructor:</h5></Form.Label>
        <Form.Control  type="text" placeholder="Enter instructor name" value={courseData.course_instructor} name="course_instructor" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3 mt-1" >
        <Form.Label className='float-start'><h5>Course Rate:</h5></Form.Label>
        <Form.Control  type="text" placeholder="Enter rate" value={courseData.course_rate} name="course_rate" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3 mt-1" >
          <Form.Label className='float-start'><h5>Course student:</h5></Form.Label>
          <Form.Control  type="text"value={courseData.student_course_name} name="student_course_name" onChange={handleChange}/>
        </Form.Group>

      
        <Button  variant="primary" type="submit" onChange={formSubmit}>
          Add Course
        </Button>  
     
      
    </Form>
  </div>
  )
}
