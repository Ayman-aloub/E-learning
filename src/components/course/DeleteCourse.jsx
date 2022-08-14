import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom'
import './css/FileUploadStyle.css'
import Swal from "sweetalert2";
import { useParams } from 'react-router-dom'

function DeleteCourse() {
    let {course_id} = useParams();
    const [result,settotalResult]=useState(0);
    const [data,setData]=useState([]);

      useEffect(()=>{
        try{
           axios.get(`http://localhost:8000/course/rest/generics/${course_id}`)
         .then((res)=>{
                 settotalResult(res.data.length);
                 setData(res.data)
  
            })
        
        }catch(error){
             console.log(error);
        }
        Swal.fire({
            title:'confirm',
            text:'Are you sure u want to delete this course?!',
            icon: 'info',
            confirmButtonText:'Delete',
            showCancelButton: true
        }).then((result)=>{
            if(result.isConfirmed){
                try{
                    axios.delete(`http://localhost:8000/course/rest/generics/${course_id}`)
                    .then((res) => {
                        Swal.fire("course has been deleted successfully")
                        // settotalResult(res.data.length);
                        // setData(res.data);
                        // window.location.reload();
                        try{
                            axios.get(`http://localhost:8000/course/rest/generics/${course_id}`)
                          .then((res)=>{
                                  settotalResult(res.data.length);
                                  setData(res.data)
                   
                             })
                         
                         }catch(error){
                              console.log(error);
                         }
            });
        
        }catch(error){
            Swal.fire("error,course can't been deleted")
        }
     }else{
        Swal.fire("Error,course can't been deleted")
     }
    });

     },[]);

//      
        

  return (
    <div>
        <h1 className='alert alert-success p-5'>your course has been deleted successfully</h1>
    </div>
  )
}
export default DeleteCourse;