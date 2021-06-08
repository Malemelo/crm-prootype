import React, {useState} from 'react'
import   '../Style/Register.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Block, Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
// import { BrowserRouter, Route } from 'react-router-dom';
// import Homescreen from './screen/Homescreen';
const Register = () => {
    const [name, setName] = useState('');
    return (
        // <BrowserRouter>
        <Container className="container" >
            <Card style={{ width: '35rem' }}>
                <Card.Body>
                    <Card.Title>Fill In your Details Below</Card.Title>
                    <Form className="form" >
                        <Form.Group controlId="formBasicName">
                            <Form.Label  >Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Full-Name" value={name} onChange={event => setName(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicDateOfBirth">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" placeholder="Enter DOB" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhoneNUmber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPinCode">
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control type="number" placeholder="Pin Code" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" />
                        </Form.Group>
                        <Form.Group controlId="formBasicNRc">
                            <Form.Label>Nrc/Passport</Form.Label>
                            <Form.Control type="number" placeholder="Enter Nrc/ Password" />
                        </Form.Group>
                        {/* <Route path="/" component={Homescreen}></Route> */}
                        <Button variant="primary">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
            <h1>{name} </h1>
        </Container>
        // </BrowserRouter>





    )
}

export default Register
