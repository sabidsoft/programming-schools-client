import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Image, } from 'react-bootstrap';
import { jsPDF } from "jspdf";
import { FcDownload } from 'react-icons/fc'

const Course = () => {
    const course = useLoaderData()

    // pdf downlod generator
    const handlePdfDownload = () => {
        const doc = new jsPDF()

        doc.text(`
            Course Information:

            Course Name: ${course.course_name} Course
            Course Fee: ${course.course_fee}
            Course Duration: ${course.course_duration}
            Weekly Class: ${course.course_weekly}
            Class Time: ${course.class_time}
        `, 10, 10)
        doc.save(`${course.course_name}.pdf`)
    }

    return (
        <Container className='mt-5 px-4'>
            <Row>
                <Col md='8' className='mx-auto rounded shadow my-5 p-4 p-lg-5 '>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h3 className='m-0 mb-5'>{course.course_name} Programming Language</h3>
                        <Button onClick={handlePdfDownload} variant='outline-info'>Download PDF <FcDownload /></Button>
                    </div>
                    <Image
                        src={course.image_url}
                        className='w-100 mb-4'
                    />
                    <h4>Introduction:</h4>
                    <p style={{ textAlign: 'justify' }} className='mb-5'>{course.details}</p>
                    <h4 className='mb-3'>Course Information:</h4>
                    <ul className='mb-5'>
                        <li>{`Course name: ${course.course_name} Course`}</li>
                        <li>{`Course fee: ${course.course_fee}`}</li>
                        <li>{`Course duration: ${course.course_duration}`}</li>
                        <li>{`Weekly class: ${course.course_weekly}`}</li>
                        <li>{`Class time: ${course.class_time}`}</li>
                    </ul>
                    <Link to={`/checkout/${course._id}`}>
                        <Button variant="outline-info" className='px-5 rounded-pill'>Get premium access</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Course;