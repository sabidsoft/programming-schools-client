import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Header/>
            <Container>
                <Outlet/>
            </Container>
        </div>
    );
};

export default Main;