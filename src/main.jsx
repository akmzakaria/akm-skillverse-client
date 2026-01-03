import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { Toaster } from 'react-hot-toast'
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
import EditCourse from './Components/EditCourse'
import Error404 from './Pages/Error404'
import Loading from './Pages/Loading'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    children: [
      {
        path: '/',
        loader: () => fetch('https://akm-skillverse-server.vercel.app/courses'),
        hydrateFallbackElement: <Loading></Loading>,
        Component: Home,
      },
      {
        path: '/allcourses',
        loader: () => fetch('https://akm-skillverse-server.vercel.app/courses'),
        hydrateFallbackElement: <Loading></Loading>,
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
        path: '/editcourse/:id',
        loader: () => fetch('https://akm-skillverse-server.vercel.app/courses'),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <EditCourse></EditCourse>
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
        loader: () => fetch('https://akm-skillverse-server.vercel.app/courses'),
        hydrateFallbackElement: <Loading></Loading>,
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: '/about',
        Component: AboutUs,
      },
      {
        path: '/contact',
        Component: ContactUs,
      },
    ],
  },
  {
    path: '*',
    Component: Error404,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </AuthProvider>
  </StrictMode>
)
