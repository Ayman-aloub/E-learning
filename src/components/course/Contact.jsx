import { NavLink, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
export default function Contact() {
  useEffect(() => {
    document.title = `Contact Us`;
  });
  let navigate = useNavigate();
  const goToHome=()=>{
    navigate("/home");
  };
  return (
    <div className="alert alert-light p-5">
        <h1> Contact Us</h1>
        <p>You can contact us using this mails:</p>
        <h5>Alaa Abouzied</h5>
        <a href="https://www.gmail.com">alaa.m.abouzied@gmail.com</a>
        <br/>
        <button className='btn btn-outline-success' onClick={goToHome}>Back To home</button>
    </div>
  )
}
