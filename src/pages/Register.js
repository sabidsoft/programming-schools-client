import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const [error, setError] = useState('')
    const { register, updateUserProfile, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleOnSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value
        const photourl = event.target.photourl.value
        const email = event.target.email.value
        const password = event.target.password.value

        const handleUpdateUserProfile = () => {
            updateUserProfile({ displayName: name, photoURL: photourl })
                .then(() => console.log('Profile updated'))
                .catch(error => console.error('error:', error.code))
        }

        if(name.length < 10){
            return setError('Your name is too short!')
        }

        register(email, password)
            .then(result => {
                console.log('user created')
                setError('')
                event.target.reset()
                navigate('/')
                setLoading(false)
                handleUpdateUserProfile()
            })
            .catch(error => {
                console.error('error:', error.code)
                if(error.code === 'auth/weak-password'){
                    setError('Password must be 6 characters or more!')
                }
                if(error.code === 'auth/email-already-in-use'){
                    setError('The email already in use!')
                }
            })
    }
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col md='8' lg='4' className='mx-auto rounded shadow my-5 p-5'>
                        <h3 className='text-center m-0 mb-5'>Please Register</h3>
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Fullname</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter fullname"
                                    name="name"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                                <Form.Label>Photo URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter photo URL"
                                    name="photourl"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    required
                                />
                            </Form.Group>
                            {
                                error && <p className='text-center text-danger'>{error}</p>
                            }
                            <Button variant="info" type="submit" className='w-100 text-white mb-4'>
                                Register
                            </Button>
                            <p className='text-center m-0'>Have an account? <Link to='/login' className='text-info'>Login now</Link></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;