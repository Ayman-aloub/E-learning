import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FileUpload from './FileUpload'
import React, { useState, useEffect } from 'react';
import './css/FileUploadStyle.css'
import axios from "axios";
import { NavLink } from 'react-router-dom'
import './css/FileUploadStyle.css'
function AddCategoryOld() {
  const [categoryData,setCategoryData]=useState({
    cat_name:'',
  });

  const handleChange=(event)=>{
    setCategoryData({
      ...categoryData,
      [event.target.name]:event.target.value
    })
  };

  const formSubmit=()=>{
    const _formData = new FormData();
    _formData.append('cat_name',categoryData.cat_name);
    try{
      axios.post("http://localhost:800/category/list/",_formData,{
        headers:{
          'content-type':'multipart/form-data',
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      }).then((res)=>{
        console.log(res.data);
      }
      )
    }catch(error){
        console.log(error);
    }
  }
  return (
    <div className='container mt-4 w-75'>
      <div className='bg-secondary'> <h1>Add New Category</h1></div>
      <Form onSubmit={formSubmit}>
        <Form.Group className="  my-3 " >
          <Form.Label className='float-start'><h5>Category Title:</h5></Form.Label>
          <Form.Control  type="text" placeholder="Enter Course Title"  name="cat_name" onChange={handleChange}/>
        </Form.Group>
        
        <NavLink to='#'>
          <Button  variant="primary" type="submit" onSubmit={formSubmit}>
            Add Category
          </Button>  
        </NavLink>
        
      </Form>
    </div>
  );
}

export default AddCategoryOld;

