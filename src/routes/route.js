import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Blog from '../pages/Blog'
import Course from '../pages/Course'
import Courses from '../pages/Courses'
import Error from '../pages/Error'
import Faq from '../pages/Faq'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Checkout from '../pages/Checkout'
import Register from '../pages/Register'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/courses',
                element: <Courses/>,
            },
            {
                path: '/courses/:id',
                element: <Course/>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <Checkout/>,
                loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/faq',
                element: <Faq/>
            },
        ]
    }
])