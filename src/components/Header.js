import React from 'react';
import { Container, Nav, Navbar, Image, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { CiDark, CiLight } from 'react-icons/ci';
import logo from '../assets/images/logo.png'
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const Header = () => {
    const [dark, setDark] = useState(false)
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then(() => console.log('Logout successfull'))
            .catch(err => console.error('error:', err))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='bg-warning' sticky='top'>
            <Container>
                <Navbar.Brand className='d-flex align-items-center'>
                    <Link to='/' className='me-2'>
                        <Image
                            src={logo}
                            width={30}
                        />
                    </Link>
                    <Link to='/' className='text-decoration-none text-info me-5'>Programming Schools</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='mb-3 mb-lg-0 me-lg-4 mt-3 mt-lg-0 text-decoration-none text-muted fw-semibold'>Home</NavLink>
                        <NavLink to='/courses' className='mb-3 mb-lg-0 me-lg-4 text-decoration-none text-muted fw-semibold'>Courses</NavLink>
                        <NavLink to='/blog' className='mb-3 mb-lg-0 me-lg-4 text-decoration-none text-muted fw-semibold'>Blog</NavLink>
                        <NavLink to='/faq' className='mb-3 mb-lg-0 me-lg-4 text-decoration-none text-muted fw-semibold'>FAQ</NavLink>
                        <Button variant="link" onClick={() => setDark(!dark)} className='d-flex align-items-center me-lg-4 text-decoration-none text-muted fw-semibold p-0 mb-2 mb-lg-0'>
                            {
                                !dark ? (
                                    <>
                                        <span className='me-1'>Dark</span>
                                        <CiDark size={20} />
                                    </>
                                ) : (
                                    <>
                                        <span className='me-1'>Light</span>
                                        <CiLight size={20} />
                                    </>
                                )
                            }
                        </Button>

                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        {
                            user?.uid ? (
                                <>
                                    <Image
                                        src={user?.photoURL}
                                        width={30}
                                        height={30}
                                        roundedCircle
                                        title={user?.displayName}
                                    />
                                    <Button onClick={handleLogout} variant="link" className='ms-lg-2 text-decoration-none text-muted fw-semibold'>Logout</Button>
                                </>
                            ) : (
                                <Link to='/login' className='d-flex align-items-center me-lg-4 text-decoration-none text-muted fw-semibold'>
                                    login
                                </Link>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;