import { use, useState } from 'react'
import { motion } from 'framer-motion' // eslint-disable-line
import { LuEye, LuEyeClosed } from 'react-icons/lu'
import { Link, useLocation, useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import { AuthContext } from '../Provider/AuthProvider'

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { userLogIn, googleSignIn, setUser } = use(AuthContext)

  const [show, setShow] = useState(false)
  const [emailInput, setEmailInput] = useState('') // store email state

  const handleToggleEye = (e) => {
    e.preventDefault()
    setShow(!show)
  }

  const handleLogIn = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    userLogIn(email, password)
      .then((res) => {
        setUser(res.user)
        toast.success('Logged In Successfully!', {
          duration: 3000,
          position: 'top-center',
          style: {
            background: '#10B981',
            color: '#fff',
            fontWeight: '600',
            borderRadius: '12px',
            padding: '16px',
          },
        })
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch(() => {
        toast.error('Unable to login. Please try again!', {
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

  const handleSignInGoogle = (e) => {
    e.preventDefault()
    googleSignIn()
      .then((res) => {
        setUser(res.user)
        toast.success('Signed In Successfully!', {
          duration: 3000,
          position: 'top-center',
          style: {
            background: '#10B981',
            color: '#fff',
            fontWeight: '600',
            borderRadius: '12px',
            padding: '16px',
          },
        })
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch(() => {
        toast.error('Unable to sign in. Please try again!', {
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

  return (
    <motion.div
      className="hero min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <title>AKM SkillVerse - Login</title>
      <div className="hero-content flex-col">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Login now!
        </motion.h1>
        <motion.div
          className="card w-full max-w-md bg-base-200/80 backdrop-blur-lg rounded-2xl border border-secondary/30 shadow-2xl p-6 md:p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form onSubmit={handleLogIn} className="flex flex-col gap-4">
            <label className="font-medium">Email</label>
            <motion.input
              name="email"
              type="email"
              placeholder="Email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="input bg-base-100 border border-secondary/50 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-secondary outline-none"
              required
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />

            <label className="font-medium">Password</label>
            <div className="relative">
              <motion.input
                name="password"
                type={show ? 'text' : 'password'}
                placeholder="Password"
                className="input bg-base-100 border border-secondary/50 rounded-lg placeholder-gray-400 w-full focus:ring-2 focus:ring-secondary outline-none"
                required
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <motion.button
                onClick={handleToggleEye}
                className="absolute top-3 right-3"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {show ? <LuEyeClosed /> : <LuEye />}
              </motion.button>
            </div>

            <Link
              to="/forgotpassword"
              state={{ email: emailInput }}
              className="text-xs md:text-sm link link-hover text-secondary"
            >
              Forgot password?
            </Link>

            <motion.button
              type="submit"
              className="btn btn-secondary text-white rounded-full w-full mt-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Login
            </motion.button>

            <motion.button
              onClick={handleSignInGoogle}
              className="btn bg-white text-black rounded-full border-[#e5e5e5] w-full mt-2 flex items-center justify-center gap-2 hover:bg-gray-100"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </motion.button>
          </form>

          <p className="mt-6 text-sm text-center">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="underline text-secondary font-semibold hover:text-primary"
            >
              Register Now
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Login
