import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import HomeLayout from './Layout/HomeLayout'
import MyEnrolledCourses from './Components/MyEnrolledCourses'
import AddCourse from './Components/AddCourse'
import MyAddedCourses from './Components/MyAddedCourses'
import Login from './Pages/Login'
import AuthProvider from './Provider/AuthProvider'
import ForgotPass from './Pages/ForgotPass'
import Register from './Pages/Register'
import PrivateRoute from './Provider/PrivateRoute'
import Home from './Components/Home'
import AllCourses from './Components/AllCourses'
import CourseDetails from './Components/CourseDetails'

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    children: [
      {
        path: '/',
        loader: () => fetch('http://localhost:3000/courses'),
        Component: Home,
      },
      {
        path: '/allcourses',
        loader: () => fetch('http://localhost:3000/courses'),
        Component: AllCourses,
      },
      {
        path: '/myenrolledcourses',
        element: (
          <PrivateRoute>
            <MyEnrolledCourses></MyEnrolledCourses>
          </PrivateRoute>
        ),
      },
      {
        path: '/addcourse',
        element: (
          <PrivateRoute>
            <AddCourse></AddCourse>
          </PrivateRoute>
        ),
      },
      {
        path: '/myaddedcourses',
        element: (
          <PrivateRoute>
            <MyAddedCourses></MyAddedCourses>
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/forgotpassword',
        Component: ForgotPass,
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/coursedetails/:id',
        loader: () => fetch('http://localhost:3000/courses'),
        element: (
          <PrivateRoute>
            <CourseDetails></CourseDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
)
