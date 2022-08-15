import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
const UpdateCoursetry = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    

    const [file, setFile] = useState();
    const [course_name, setCourse_name] = useState('')
    const [course_description, setCourse_description] = useState('')
    const [course_image, setCourse_image] = useState('')
    const [course_category, setCourse_category] = useState('')

    useEffect(() => {
        const getDataById = async () => {
            const {data} = await axios.get(`http://localhost:8000/course/rest/generics/${id}`)
            setCourse_name(data.course_name)
            setCourse_description(data.course_description)
            setCourse_image(data.course_image)
            setCourse_category(data.course_category)
        }

        getDataById()
    },[id])
    const handleFileChange=(event)=>{
        setCourse_image({
          ...course_image,
          [event.target.name]:event.target.files[0]
        })
        setFile(URL.createObjectURL(event.target.files[0]));
      };
    
   const updateHandler = async (e) => {

        e.preventDefault()
       
        // update by put request

        const data = {
            course_name: course_name,
            course_description: course_description,
            course_image: course_image,
            course_category: course_category
        }

        await axios.put(`http://localhost:8000/course/rest/generics/${id}`, data)

        navigate.push('http://localhost:8000/course/rest/generics/')

   }

    return (
        <>
            <Container className='mt-5 p-2'>
                <h1>Add Product</h1>
                <hr />

                <Form onSubmit={updateHandler}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            value={course_name}
                            onChange={(e) => setCourse_name(e.target.value)}
                            type="text"
                          />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            value={course_description}
                            onChange={(e) => setCourse_description(e.target.value)}
                            type="text"
                             />
                    </Form.Group>


                    <Form.Group className="mb-3 ms-0" >
                        <Form.Label className='float-start'><h5>Course Image:</h5></Form.Label>
                        <Form.Control  type="file" accept="image/*" placeholder="select image" name="course_image"  value={course_image} onChange={handleFileChange} />
                        <img src={file} className='inputimg'/>
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Update Product
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default UpdateCoursetry