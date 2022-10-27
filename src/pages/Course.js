import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Image, } from 'react-bootstrap';

const Course = () => {
    const course = useLoaderData()
    return (
        <Container className='mt-5'>
            <Row>
                <Col md='8' className='mx-auto rounded shadow my-5 p-5'>
                    <h3 className='text-center m-0 mb-5'>{course.course_name} Programming Language</h3>
                    <Image
                        src={course.image_url}
                        className='w-100 mb-4'
                    />
                    <p style={{ textAlign: 'justify' }} className='mb-4'>{course.details}</p>
                    <Link to={`/checkout/${course._id}`}>
                        <Button variant="outline-info" className='px-5 rounded-pill'>Get premium access</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Course;