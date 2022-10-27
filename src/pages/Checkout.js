import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Col, Container, Row } from 'react-bootstrap';

const Checkout = () => {
    const { user } = useContext(AuthContext)
    const courseDetails = useLoaderData()

    return (
        <Container className='my-5'>
            <Row>
                <Col lg='8' className='mx-auto shadow rounded p-5'>
                    <h2 className='text-center mb-3'>{`Congratulations! ${user.displayName}`}</h2>
                    <h5 className='text-center'>Now you are a premium user</h5>
                    <div className='mt-5'>
                        <h5>Your basic information:</h5>
                        <ul>
                            <li>{`Your name: ${user.displayName}`}</li>
                            <li>{`Your email address: ${user.email}`}</li>
                        </ul>
                    </div>
                    <div className='mt-4 mb-5'>
                        <h5>Your course information:</h5>
                        <ul>
                        <li>{`Course name: ${courseDetails.course_name} Course`}</li>
                        <li>{`Course fee: ${courseDetails.course_fee}`}</li>
                        <li>{`Course duration: ${courseDetails.course_duration}`}</li>
                        <li>{`Weekly class: ${courseDetails.course_weekly}`}</li>
                        <li>{`Class time: ${courseDetails.class_time}`}</li>
                        </ul>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;