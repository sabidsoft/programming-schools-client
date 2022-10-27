import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext)
    const courseDetails = useLoaderData()

    return (
        <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
            <h1 className='mb-5'>{`Congratulations ${user?.displayName}! Now you are a premium user!`}</h1>
            <p className='fs-4'><span className='fw-bold fs-4'>Course:</span> {courseDetails.course_name}</p>
        </div>
    );
};

export default Checkout;