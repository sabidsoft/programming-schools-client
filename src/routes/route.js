import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Blog from '../pages/Blog'
import Course from '../pages/Course'
import Courses from '../pages/Courses'
import Faq from '../pages/Faq'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Checkout from '../pages/Checkout'
import Register from '../pages/Register'
import Errorpage from '../pages/Errorpage'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <Errorpage/>,
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
                loader: ({ params }) => fetch(`https://programming-schools-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout/></PrivateRoute>,
                loader: ({ params }) => fetch(`https://programming-schools-server.vercel.app/checkout/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/faq',
                element: <Faq/>
            }
        ]
    }
])