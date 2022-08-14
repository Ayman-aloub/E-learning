import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  
  let navigate = useNavigate();
  const goToHome=()=>{
    navigate("/home");
  };
  return (
    <div className="alert alert-light p-5">
        <h1>Hello, we are ITI students in the track of Full stack web development using python at the branch of el-Menoufia</h1>
        <p>This is our graduation project we have tried to work as hard as we can to make it useful and easy to use</p>
        <p>I wish you will make the best use of it and find it useful</p>
        <button className='btn btn-outline-primary' onClick={goToHome}>Back To home</button>
    </div>
  )
}
