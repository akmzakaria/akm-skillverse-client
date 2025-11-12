import React, { use } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider'
import { toast } from 'react-toastify'

const Navbar = () => {
  const navigate = useNavigate()
  const { user, logOut, setUser } = use(AuthContext)

  const links1 = (
    <nav className="lg:flex">
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/allcourses'}>All Courses</NavLink>
      </li>
    </nav>
  )

  const links2 = (
    <nav>
      {user && (
        <>
          <li>
            <NavLink to={'/myenrolledcourses'}>My Enrolled Courses</NavLink>
          </li>
          <li>
            <NavLink to={'/addcourse'}>Add Course</NavLink>
          </li>
          <li>
            <NavLink to={'/myaddedcourses'}>My Added Courses</NavLink>
          </li>
        </>
      )}
    </nav>
  )

  const handleLogOut = (e) => {
    e.preventDefault()
    logOut()
      .then(() => {
        toast.warn('Logged Out Successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        })
        setUser(null)
        navigate('/login')
      })
      .catch(() => {
        toast.warn('Unable to log out. Please try again!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        })
      })
  }

  const handleRedirect = () => {
    if (!user) {
      navigate('/login')
    }
  }

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 -mx-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links1}
              {user && (
                <li>
                  <a>Dashboard</a>
                  <ul className="p-2">{links2}</ul>
                </li>
              )}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost -mx-4 text-xl md:text-xl">
            <img className="w-6 md:w-8" src="/logo5.png" alt="" />
            AKM SkillVerse
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links1}
            {user && (
              <li>
                <details>
                  <summary onClick={handleRedirect}>Dashboard</summary>
                  <ul className="p-2 w-50 z-50">{links2}</ul>
                </details>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {/* theme controller */}
          <div className="mr-1 md:mr-5">
            <label className="toggle text-base-content">
              <input type="checkbox" value="light" className="theme-controller" />

              <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>

              <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>
            </label>
          </div>
          {user ? (
            <Link
              onClick={handleLogOut}
              className="btn btn-outline bg-primary text-white font-bold rounded-full"
            >
              Log Out
            </Link>
          ) : (
            <Link to={'/login'} className="btn bg-secondary font-bold text-white rounded-full">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
