import axios from 'axios'
import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useEffect } from 'react';


const AddCoursetry = ({ history }) => {


  const [course_name, setCourse_name] = useState('')
  const [course_description, setCourse_description] = useState('')
  const  [course_instructor,setCourseInstructor]=useState('')
  const [course_category, setCourse_category] = useState('')
  const [course_image, setCourseImage] = useState('')
  const [cats,setCats]=useState([]);
  useEffect(()=>{
    try{
      axios.get("http://127.0.0.1:8000/course/rest/category/")
      .then((res)=>{
        setCats(res.data)
        console.log("yaraaaaaaaaaaaab:",res.data);
      });
    }catch(error){
      console.log(error);
    }
  },[]);
    const addCourseHandler = async (e) => {

        e.preventDefault()

        // const data = {
        //     title: title,
        //     price: price,
        //     description: description,
        //     published: published
        // }

       

        const formData = new FormData()

        formData.append('course_image', course_image)
        formData.append('course_name', course_name)
        formData.append('course_category', course_category)
        formData.append('course_description', course_description)
        formData.append('course_instructor', course_instructor)

        await axios.post('http://127.0.0.1:8000/course/rest/generics/', formData)
        history.push('http://127.0.0.1:8000/course/rest/generics/')
    
    }



    return (
        <>
            <Container className='mt-5 p-2'>
                <h1>Add Product</h1>
                <hr />

                <Form onSubmit={addCourseHandler} method="POST" encType='multipart/form-data'>

                <Form.Group controlId="fileName" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                        type="file"
                        name='course_image'
                        onChange={(e) => setCourseImage(e.target.files[0])}
                        size="lg" />
                </Form.Group>

                    <Form.Group className="mb-3" controlId="course_name">
                        <Form.Label>Course Name</Form.Label>
                        <Form.Control
                            value={course_name}
                            onChange={(e) => setCourse_name(e.target.value)}
                            type="text"
                          />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                      <Form.Label className='float-start' name="cat_name"><h5>Course Category:</h5></Form.Label>
                      <Form.Select aria-label="Default select example" name="course_category" id="category" onChange={(e) => setCourse_category(e.target.value)}>
                        {cats.map((category,index)=>{return <option key={index} value={category.id}>{category.cat_name}</option>})}
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="course_instructor">
                        <Form.Label>Course Instructor ($)</Form.Label>
                        <Form.Control
                            value={course_instructor}
                            onChange={(e) => setCourseInstructor(e.target.value)}
                            type="text"
                             />
                    </Form.Group>

                  
                    <Form.Group className="mb-3" controlId="course_description">
                        <Form.Label>Course Description</Form.Label>
                        <Form.Control
                            value={course_description}
                            onChange={(e) => setCourse_description(e.target.value)}
                            as="textarea"
                            />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="publishedCheckedid">
                        <Form.Check
                            type="text"
                            onChange={(e) => setCourseInstructor(e.target.checked)}
                            value={course_instructor}
                           />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Add Product
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default AddCoursetry