import React from 'react'
import { Button, Container,Row } from 'react-bootstrap'
import "./LandingPage.css"

function LandingPage() {
  return (
    <div className='main'>
        <Container>
            <Row>
            <div className='Intro-text'>
                <div>
                    <h1 className='title'> First React App Project</h1>
                    <p className='subTitle'>One place for all the notes</p>
                    </div>
                <div className='buttonContainer'>
                    <a href='/login'>
                        <Button  style={{marginLeft:"100px"}}size="lg" className='landingButton'>Login</Button>
                    </a>
                    <a href='/register'>
                        <Button size="lg" className='landingButton' variant="outline-primary">signup</Button>
                    </a>

                </div>

            </div>
            </Row>
            </Container>
            </div>
  )
}

export default LandingPage