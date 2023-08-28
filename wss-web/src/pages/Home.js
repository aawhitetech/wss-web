import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
    return (
        <Container fluid className="home min-vh-100 d-flex align-items-center justify-content-center">
            <Row className="text-center">
                <Col>
                    <h1>Whitesoft Solutions</h1>
                    <p>Crafting the Future of Technology</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;