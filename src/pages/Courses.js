import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import LeftAsideNav from '../components/LeftAsideNav';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col lg='3'><LeftAsideNav/></Col>
                <Col lg='9'></Col>
            </Row>
        </Container>
    );
};

export default Courses;