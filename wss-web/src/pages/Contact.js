import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
    return (
        <Container fluid className="contact min-vh-100">
            <Row className="mb-5 pt-5">
                <Col className="text-center">
                    <h1>Contact Us</h1>
                    <p className="lead">We would love to hear from you! Please fill out the form below and we will get in touch with you as soon as possible.</p>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form>
                        <Form.Group controlId="formBasicName" className="mb-4">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" className="soft-input" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="mb-4">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" className="soft-input" />
                        </Form.Group>
                        <Form.Group controlId="formBasicMessage" className="mb-4">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your message" className="soft-input" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="soft-button py-2 px-4 rounded">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;