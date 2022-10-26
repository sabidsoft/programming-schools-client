import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import LeftAsideNav from '../components/LeftAsideNav';
import RightContentCard from '../components/RightContentCard';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col md='2'><LeftAsideNav /></Col>
                <Col md='10'>
                    <Row>
                        <RightContentCard/>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;