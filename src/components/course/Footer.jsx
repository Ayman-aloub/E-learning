import React from 'react'

export default function Footer() {
  return (
    <footer className="text-muted py-5 bg-dark color-light border-top mt-5" bg="dark" variant="dark" expand="lg">
        <div className="container">
            
            <br/>
            <p className='mb-1'> 
                We are an e-learning website,that aims to increase educational opportunities and provide the capabilities that students and teachers need in one place to make the educational process easy and enjoyable
            </p>
            <p className='float-end mb-1'> <a href="#">Back To Top</a> </p>
            <p className='float-start mb-1'><a href='/'>Visit Home page</a></p>
        </div>
    </footer>
  )
}
