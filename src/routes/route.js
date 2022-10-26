import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Blog from '../pages/Blog'
import Course from '../pages/Course'
import Courses from '../pages/Courses'
import Error from '../pages/Error'
import Faq from '../pages/Faq'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Premium from '../pages/Premium'
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
                path: '/courses/premium/:id',
                element: <Premium/>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/premium/${params.id}`)
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