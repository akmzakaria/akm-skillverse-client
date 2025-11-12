import React, { use, useState } from 'react'
import { LuEye, LuEyeClosed } from 'react-icons/lu'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { AuthContext } from '../Provider/AuthProvider'

const Register = () => {
  const [error, setError] = useState({ uppercase: false, lowercase: false, six_char: false })
  const [password, setPassword] = useState('')
  const isPasswordValid = !error.uppercase && !error.lowercase && !error.six_char && password

  const handlePassChange = (e) => {
    const value = e.target.value
    setPassword(value)

    if (!value) {
      setError({ uppercase: false, lowercase: false, six_char: false })
    } else {
      setError({
        uppercase: !/[A-Z]/.test(value),
        lowercase: !/[a-z]/.test(value),
        six_char: value.length < 6,
      })
    }
  }

  const navigate = useNavigate()

  const { createUser, googleSignIn, setUser, updateUser, setLoading } = use(AuthContext)

  const [show, setShow] = useState(false)

  const handleToggleEye = (e) => {
    e.preventDefault()
    setShow(!show)
  }

  const handleRegister = (e) => {
    e.preventDefault()
    setLoading(false)
    const name = e.target.name.value
    const email = e.target.email.value
    const url = e.target.url.value.trim()
    const password = e.target.password.value

    createUser(email, password)
      .then((res) => {
        const user = res.user
        setUser(user)
        console.log(user)

        updateUser({ displayName: name, photoURL: url })
          .then(() => {
            // console.log(res.user);
            setUser({ ...user, displayName: name, photoURL: url })
            navigate('/')
          })
          .catch(() => {
            // console.log(err.message);
          })

        toast.success('Registered Successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        })
        setLoading(false)
      })
      .catch(() => {
        // console.log(err.message);
        // console.log(err.data);
        toast.warn('Unable to register. Please try again!', {
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

  const handleSignInGoogle = (e) => {
    e.preventDefault()

    googleSignIn()
      .then((res) => {
        const user = res.user
        setUser(user)
        // console.log(res.user);
        toast.success('Signed In Successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        })
        navigate('/')
      })
      .catch((err) => {
        console.log(err.message)
        toast.warn('Unable to signin. Please try again!', {
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

  return (
    <div>
      <title>AKM SkillVerse - Register</title>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold  ">Register now!</h1>
          </div>
          <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-black/15 backdrop-blur-lg border rounded-2xl border-blue-500/30 ">
            <div className="card-body">
              {/* form */}
              <form className="flex flex-col gap-3" onSubmit={handleRegister}>
                {/* name */}
                <label className="  ">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input bg-transparent border border-gray-600   placeholder-gray-400 rounded-lg"
                  placeholder="Enter Your Name"
                  required
                />

                {/* photoURL */}
                <label className="  ">Photo URL</label>
                <input
                  name="url"
                  type="text"
                  className="input bg-transparent border border-gray-600   placeholder-gray-400 rounded-lg"
                  placeholder="Enter Your PhotoURL"
                />

                {/* email */}
                <label className=" ">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input bg-transparent border border-gray-600   placeholder-gray-400 rounded-lg"
                  placeholder="Enter Your Email"
                  required
                />

                {/* password */}
                <label className="  ">Password</label>
                <div className="relative">
                  <input
                    onChange={handlePassChange}
                    value={password}
                    name="password"
                    type={show ? 'text' : 'password'}
                    className="input bg-transparent border border-gray-600   placeholder-gray-400 rounded-lg"
                    placeholder="Enter Your Password"
                  />
                  <button
                    onClick={handleToggleEye}
                    className="cursor-pointer absolute top-3 right-5  "
                  >
                    {show ? <LuEyeClosed /> : <LuEye />}
                  </button>
                </div>

                <div>
                  <label className="label  ">
                    <input name="terms" type="checkbox" className="checkbox" />
                    Accept Our Terms & Conditions!
                  </label>
                </div>

                {/* error messages */}
                <div className="text-sm ">
                  {error?.uppercase && (
                    <p className="text-primary">Must include at least one uppercase letter!</p>
                  )}
                  {error?.lowercase && (
                    <p className="text-primary">Must include at least one lowercase letter!</p>
                  )}
                  {error?.six_char && (
                    <p className="text-primary">Must be at least six characters!</p>
                  )}
                </div>

                <button
                  disabled={!isPasswordValid}
                  type="submit"
                  className="text-white rounded-full text-sm cursor-pointer font-bold h-10 bg-secondary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Register
                </button>

                {/* google login */}
                <button
                  onClick={handleSignInGoogle}
                  className="btn rounded-full text-black bg-white border-[#e5e5e5] w-full mt-2 flex items-center justify-center gap-2"
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

              <p className="  mt-4 text-center">
                Already have an account?{' '}
                <Link className="underline text-blue-700" to="/login">
                  Login Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
