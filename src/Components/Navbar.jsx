import { use, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import { motion } from 'framer-motion' // eslint-disable-line
import { AuthContext } from '../Provider/AuthProvider'
import toast from 'react-hot-toast'

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
      <li>
        <NavLink to={'/about'}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={'/contact'}>Contact Us</NavLink>
      </li>
    </nav>
  )

  const links2 = (
    <nav>
      {user && (
        <>
          <li>
            <NavLink to={'/profile'}>My Profile</NavLink>
          </li>
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

  // Theme state
  const [theme, setTheme] = useState('light')

  // On mount, read theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const handleLogOut = (e) => {
    e.preventDefault()
    logOut()
      .then(() => {
        toast.success('Logged Out Successfully!', {
          duration: 3000,
          position: 'top-center',
          style: {
            background: '#3B82F6',
            color: '#fff',
            fontWeight: '600',
            borderRadius: '12px',
            padding: '16px',
          },
        })
        setUser(null)
        navigate('/login')
      })
      .catch(() => {
        toast.error('Unable to log out. Please try again!', {
          duration: 3000,
          position: 'top-center',
          style: {
            background: '#EF4444',
            color: '#fff',
            fontWeight: '600',
            borderRadius: '12px',
            padding: '16px',
          },
        })
      })
  }

  const handleRedirect = () => {
    if (!user) {
      navigate('/login')
    }
  }

  return (
    <div className="backdrop-blur-lg bg-opacity-95 bg-base-100 w-full shadow-md z-50 sticky top-0 ">
      <motion.div
        className="navbar max-w-7xl mx-auto "
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <motion.div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 -mx-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </motion.div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow-xl"
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
          <Link
            to={'/'}
            className="btn btn-ghost -mx-4 text-base md:text-xl hover:scale-105 transition-transform"
          >
            <motion.img
              className="w-6 md:w-8"
              src="/logo5.png"
              alt="Logo"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
            <span className="sm:inline">AKM SkillVerse</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            {links1}
            {user && (
              <li>
                <details>
                  <summary
                    onClick={handleRedirect}
                    className="hover:text-secondary transition-colors"
                  >
                    Dashboard
                  </summary>
                  <ul className="p-2 w-50 z-[100] shadow-xl bg-base-100 rounded-box">{links2}</ul>
                </details>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {/* Profile Dropdown for logged-in users */}
          {user ? (
            <div className="dropdown dropdown-end">
              <motion.div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-10 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || 'User'} />
                  ) : (
                    <div className="bg-secondary text-white flex items-center justify-center text-xl font-bold">
                      {user?.displayName?.charAt(0)?.toUpperCase() ||
                        user?.email?.charAt(0)?.toUpperCase() ||
                        'U'}
                    </div>
                  )}
                </div>
              </motion.div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow-xl"
              >
                <li className="menu-title px-4 py-2">
                  <span className="text-sm font-semibold">{user?.displayName || 'User'}</span>
                  <span className="text-xs text-gray-500">{user?.email}</span>
                </li>
                <div className="divider pr-3 my-0"></div>
                <li>
                  <Link to="/profile" className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    My Profile
                  </Link>
                </li>
                <li>
                  <button onClick={toggleTheme} className="flex items-center gap-2">
                    {theme === 'dark' ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
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
                        </svg>
                        Light Mode
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </svg>
                        Dark Mode
                      </>
                    )}
                  </button>
                </li>
                <div className="divider pr-3 my-0"></div>
                <li>
                  <Link onClick={handleLogOut} className="flex items-center gap-2 text-error">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={'/login'}
                className="btn btn-secondary text-xs md:text-sm font-bold text-white rounded-full px-3 md:px-6"
              >
                Login
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
