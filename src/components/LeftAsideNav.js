import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftAsideNav = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://programming-schools-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(error => console.error('error:', error))
    }, [])
    return (
        <>
            <h5 className='mb-4'>All Courses</h5>
            {
                courses.map(course => {
                    return (
                        <Link
                            key={course.id}
                            to={`/courses/${course.id}`}
                            className='d-block mb-2 text-muted text-decoration-none'
                        >
                            {course.name}
                        </Link>
                    )
                })
            }
        </>
    );
};

export default LeftAsideNav;