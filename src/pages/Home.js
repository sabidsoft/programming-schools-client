import React from 'react';
import coverPhoto from '../assets/images/cp.webp';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div style={{
            backgroundImage: `url(${coverPhoto})`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            height: '93.7vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 className='text-center text-white mb-5' style={{ fontSize: '60px' }}>Programming Schools</h1>
            <p className='text-center text-white fs-5 mb-0'>It is a great learning store for beginners. Explore it.</p>
            <p className='text-center text-white fs-5 mb-5'>You can learn a lot.</p>
            <Link to='/courses'>
                <Button variant="outline-info" className='rounded-pill px-5 py-2'>Continue with our Courses</Button>{' '}
            </Link>
        </div>
    );
};

export default Home;