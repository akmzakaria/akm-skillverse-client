import React, { use, useState } from 'react'
import { LuEye, LuEyeClosed } from 'react-icons/lu'
import { Link, useLocation, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
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
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
        })
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch(() => {
        toast.warn('Unable to login. Please try again!', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
        })
      })
  }

  const handleSignInGoogle = (e) => {
    e.preventDefault()
    googleSignIn()
      .then((res) => {
        setUser(res.user)
        toast.success('Signed In Successfully!', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
        })
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch(() => {
        toast.warn('Unable to sign in. Please try again!', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
        })
      })
  }

  return (
    <div className="hero min-h-screen">
      <title>AKM SkillVerse - Login</title>
      <div className="hero-content flex-col">
        <h1 className="text-3xl font-bold   mb-4">Login now!</h1>
        <div className="card w-full max-w-sm bg-black/15 backdrop-blur-lg rounded-2xl border border-blue-500/30 shadow-2xl p-6">
          <form onSubmit={handleLogIn} className="flex flex-col gap-3">
            <label className=" ">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="input bg-transparent border border-gray-600   rounded-lg placeholder-gray-400"
              required
            />

            <label className=" ">Password</label>
            <div className="relative">
              <input
                name="password"
                type={show ? 'text' : 'password'}
                placeholder="Password"
                className="input bg-transparent border border-gray-600   rounded-lg placeholder-gray-400 w-full"
                required
              />
              <button onClick={handleToggleEye} className="absolute top-3 right-3  ">
                {show ? <LuEyeClosed /> : <LuEye />}
              </button>
            </div>

            {/* forgot pass */}
            <Link
              to="/forgotpassword"
              state={{ email: emailInput }}
              className="  text-xs link link-hover"
            >
              Forgot password?
            </Link>

            <button type="submit" className="btn btn-secondary rounded-full w-full">
              Login
            </button>

            <button
              onClick={handleSignInGoogle}
              className="btn bg-white  text-black rounded-full border-[#e5e5e5] w-full mt-2 flex items-center justify-center gap-2"
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
            </button>
          </form>

          <p className="  mt-4 text-sm text-center">
            Don't have an account?{' '}
            <Link to="/register" className="underline text-blue-700">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
