import './content.css';
import Container from 'react-bootstrap/Container';
import React from 'react'

export const content = () => {
  return (
    <div className="d-flex flex-column">
        <Container className="hero-sec d-flex flex-column justify-content-center align-items-center">
            <div className="hero-txt-sec d-flex flex-column align-items-center">
                <h1>Hi! I'm Diego Jorge.</h1>
                <p className="hero-p"> I'm a front-end developer in Philadelphia specializing in responsive and accessible web interfaces.</p>
            </div>
        </Container>
    </div>
  )
}

export default content