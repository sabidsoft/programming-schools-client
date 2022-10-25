import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                        <Nav.Link><NavLink to='/' className='me-lg-4 text-decoration-none text-muted fw-semibold'>Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink to='/courses' className='me-lg-4 text-decoration-none text-muted fw-semibold'>Courses</NavLink></Nav.Link>
                        <Nav.Link><NavLink to='/blog' className='me-lg-4 text-decoration-none text-muted fw-semibold'>Blog</NavLink></Nav.Link>
                        <Nav.Link><NavLink to='/faq' className='me-lg-4 text-decoration-none text-muted fw-semibold'>FAQ</NavLink></Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;