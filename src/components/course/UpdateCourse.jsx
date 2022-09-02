import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom'
import './css/FileUploadStyle.css'
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom'
import {  useNavigate } from "react-router-dom";
import {useDocumentTitle} from "./setDocumentTitle"
function UpdateCourse(props) {
    const [document_title, setDoucmentTitle] = useDocumentTitle("Update Course");
    let navigate = useNavigate();
    let {course_id} = useParams();
    // const { course_id } = props.match.params;
    const [cats,setCats]=useState([]);
    const [file, setFile] = useState();
    const [data,setData]=useState({
      course_name:"",
      course_description:"",
      // course_rate:"",
      course_image:"",
      course_category:"",
      // course_instructor:"",
      // student_course_name:"",

    });

    useEffect(()=>{
        try{
          axios.get("https://ammaryasser.pythonanywhere.com/category/list/")
          .then((res)=>{
            setCats(res.data)
            console.log("yaraaaaaaaaaaaab:",res.data);
          });
        }catch(error){
          console.log(error);
        }
        try{
          axios.get(`https://ammaryasser.pythonanywhere.com/course/rest/generics/${course_id}`)
            .then((res)=>{
                setData({
                    course_name:res.data.course_name,
                    course_description:res.data.course_description,
                    course_category:res.data.course_category.cat_name,
                    course_image:res.data.course_image.name,
                    // course_instructor:res.data.course_instructor,
                    // student_course_name:res.data.student_course_name,
                    // course_rate:res.data.course_rate
                })
            });
        }catch(error){
            console.log(error);
        }


      },[]);
    

    
      const handleFileChange=(event)=>{
        setData({
          ...data,
          [event.target.name]:event.target.files[0]
        })
        setFile(URL.createObjectURL(event.target.files[0]));
      };



      function submit(e){
        console.log(e.target.course_image.files[0]);
        e.preventDefault();
        axios.put(`https://ammaryasser.pythonanywhere.com/course/rest/generics/${course_id}`,{
          course_name:data.course_name,
          course_description:data.course_description,
          course_image: e.target.course_image.files[0],
          course_category:data.course_category.cat_name,
        },{headers:{
          'content-type':'multipart/form-data',
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': `token ${props.user.token}`,
        }})
        .then(res=>{console.log("sahelha yarab",res.data);
        navigate(`/mycourses`);
        return alert('Your course has been UPDATED successfully')
      })
      }
  
      function handle(e){
          const newdata={...data}
          if (newdata[e.target.name] === 'course_image') {
            newdata[e.target.name]=e.target.files[0]
            setData(newdata)
            setFile(URL.createObjectURL(e.target.files[0]));
            console.log("ya allah",newdata);
          }else{
              newdata[e.target.name]= e.target.value
              setData(newdata)
              console.log("ya allah",newdata);
            }
            
          
      }
      

  return (
    
  <div className='container mt-4 w-75'>
  <div className='bg-secondary'> <h1>Update Course</h1></div>
  
  <Form onSubmit={(e)=>submit(e)}>
    <Form.Group className="  my-3 " >
      <Form.Label className='float-start'><h5>Course Title:</h5></Form.Label>
      <Form.Control  type="text"   name="course_name"value={data.course_name} onChange={(e)=>handle(e)}/>
    
    </Form.Group>

    <Form.Group className="mb-3 " >
      <Form.Label className='float-start'><h5>Course Description:</h5></Form.Label>
      <Form.Control  type="textarea"  value={data.course_description} name="course_description" onChange={(e)=>handle(e)}/>
    </Form.Group>

    {/* <Form.Group className="mb-3 " >
      <Form.Label className='float-start'><h5>Course Rate:</h5></Form.Label>
      <Form.Control  type="number" value={data.course_rate} name="course_rate" onChange={(e)=>handle(e)}/>
    </Form.Group> */}

    {/* <Form.Group className="mb-3" >
      <Form.Label className='float-start' name="course_category"><h5>Course Category:</h5></Form.Label>
      <Form.Select aria-label="Default select example" value={data.course_category} name="course_category" id="category" onChange={(e)=>handle(e)}>
        {cats.map((category,index)=>{return <option key={index} value={category.id}>{category.cat_name}</option>})}
      </Form.Select>
    </Form.Group> */}

   
{/* 
    <Form.Group className="mb-3 ms-0" >
      <Form.Label className='float-start'><h5>Course Image:</h5></Form.Label>
      <div className="alert alert-warning">image should be updated</div>
      <Form.Control  type="file" accept="image/*" name="course_image" className='mb-2'  onChange={(e)=>handle(e)} />
      <img src={file} className='inputimg'/>
    </Form.Group> */}

        <Form.Group className="mb-3 ms-0" >
          <Form.Label className='float-start'><h5>Course Image:</h5></Form.Label>
          {/* <div className="alert alert-warning">image should be updated</div> */}
          <Form.Control  type="file" accept="image/*" name="course_image" className='mb-2' />
          {/* <img src={file} className='inputimg mt-2'/> */}
        </Form.Group>

    {/* <Form.Group className="mb-3 mt-1" >
      <Form.Label className='float-start'><h5>Course Instructor:</h5></Form.Label>
      <Form.Control  type="text"value={data.course_instructor} name="course_instructor" onChange={(e)=>handle(e)}/>
    </Form.Group> */}

    {/* <Form.Group className="mb-3 mt-1" >
      <Form.Label className='float-start'><h5>Course student:</h5></Form.Label>
      <Form.Control  type="text"value={data.student_course_name} name="student_course_name" onChange={(e)=>handle(e)}/>
    </Form.Group> */}
    <input type="submit" className='btn btn-primary p-2'/>
  </Form>
</div>
  )
}

const mapStateToprops = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToprops)(UpdateCourse);