import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useState } from 'react';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const Login = () => {
    const [error, setError] = useState('')
    const { login, googleSignIn, githubSignIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const googleAuthProvider = new GoogleAuthProvider()
    const githubAuthProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        googleSignIn(googleAuthProvider)
            .then(result => {
                // console.log('Login successful')
                navigate(location.state?.pathname || '/', { replace: true })
            })
            .catch(error => {
                console.error('error:', error.code)
                if (error.code === 'auth/internal-error') {
                    setError('Something went wrong.')
                }
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn(githubAuthProvider)
            .then(result => {
                // console.log('Login successful')
                navigate(location.state?.pathname || '/', { replace: true })
            })
            .catch(error => {
                console.error('error:', error.code)
                if (error.code === 'auth/internal-error') {
                    setError('Something went wrong.')
                }
            })
    }

    const handleOnSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        login(email, password)
            .then(result => {
                // console.log('Login successful')
                navigate(location.state?.pathname || '/', { replace: true })
                setError('')
                event.target.reset()
            })
            .catch(error => {
                console.error('error: ', error.code)
                if (error.code === 'auth/wrong-password') {
                    setError('Wrong password!')
                }
                if (error.code === 'auth/user-not-found') {
                    setError('The email is not registered!')
                }
                if (error.code === 'auth/too-many-requests') {
                    setError('Too many request! Try later.')
                }
            })
    }

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col md='8' lg='4' className='mx-auto rounded shadow my-5 p-5'>
                        <h3 className='text-center m-0 mb-5'>Please Login</h3>
                        <Form onSubmit={handleOnSubmit}>
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
                            <Button variant="info" type="submit" className='w-100 text-white'>
                                Login
                            </Button>
                            <div className='d-flex align-items-center'>
                                <div className='line'></div>
                                <p className='mx-3 pt-3'>or</p>
                                <div className='line'></div>
                            </div>
                            <Button onClick={handleGoogleSignIn} variant="outline-info" className='w-100 mb-3 text-muted'><FcGoogle size={24} className='me-2' />Sign in with Google</Button>
                            <Button onClick={handleGithubSignIn} variant="outline-info" className='w-100 mb-3 text-muted'><BsGithub size={24} className='me-2' />Sign in with Github</Button>
                            <p className='text-center m-0'>Don't have an account? <Link to='/register' className='text-info'>Register Now</Link></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;