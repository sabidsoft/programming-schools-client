import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RightContentCard = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(error => console.error('error:', error))
    }, [])
    return (
        <>
            <h1 className='mb-5 text-center'>Our Courses</h1>
            {
                courses.map(course => {
                    return (
                        <Col key={course.id} lg='4' md='6' className='mb-5'>
                            <Card className='border-0 shadow'>
                                <Card.Img variant="top" src={course.thumbnail_img} height={200} />
                                <Card.Body>
                                    <Card.Title className='mb-3'>{course.name}</Card.Title>
                                    <Card.Text className='mb-4 ' style={{ textAlign: 'justify' }}>
                                        {course.title}
                                    </Card.Text>
                                    <Link to={`/courses/${course.id}`}>
                                        <Button variant="outline-info">Details</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
        </>
    );
};

export default RightContentCard;