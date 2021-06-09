import React, { useState } from 'react'
import '../Style/Register.css'
import { Block, Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

const Register = () => {
    const [name, setName] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [address, setAddress] = useState('');
    const [nrc, setNrc] = useState('');
    const [gender, setGender] = useState('');
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(false);


    function handleSubmit(event) {
        event.preventDefault();
        const user = {
            name,
            dateOfBirth: birthDay,
            phoneNumber: phoneNumber,
            pinCode,
            address,
            nrcPassport: nrc,
            gender,
        }
        // fetch('http://localhost:5600/users')
        //     .then(response => response.json())
        //     .then(data => console.log(data));
        fetch('http://localhost:5600/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then( (response) => {
           
            return response.json();
        }).catch( (error) => {
          
        });
        setSubmit(true)
    }


    return (
        <Container className="container" >
            <Card style={{ width: '35rem' }}>
                <Card.Body>
                    <Card.Title>Fill In your Details Below</Card.Title>
                    <Form className="form" onSubmit={handleSubmit} >
                        <Form.Group controlId="formBasicName">
                            <Form.Label  >Enter Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Full-Name"
                                value={name} onChange={event => setName(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicDateOfBirth">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" placeholder="Enter DOB"
                                value={birthDay} onChange={event => setBirthDay(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhoneNUmber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="Phone Number"
                                value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPinCode">
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control type="number" placeholder="Pin Code"
                                value={pinCode} onChange={event => setPinCode(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address"
                                value={address} onChange={event => setAddress(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicNRc">
                            <Form.Label>Nrc/Passport</Form.Label>
                            <Form.Control type="text" placeholder="Enter Nrc/ Password"
                                value={nrc} onChange={event => setNrc(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicGender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control type="text" placeholder="Enter Gender"
                                value={gender} onChange={event => setGender(event.target.value)} />
                        </Form.Group>
                        <Button variant="primary" roll="submit " onClick={handleSubmit} >Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Register
