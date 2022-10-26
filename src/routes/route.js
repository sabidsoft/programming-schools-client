import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Blog from '../pages/Blog'
import Courses from '../pages/Courses'
import Error from '../pages/Error'
import Faq from '../pages/Faq'
import Home from '../pages/Home'
import Login from '../pages/Login'
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
                element: <p></p>,
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