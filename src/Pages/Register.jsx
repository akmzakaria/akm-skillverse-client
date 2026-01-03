import { use, useState } from 'react'
import { motion } from 'framer-motion' // eslint-disable-line
import { LuEye, LuEyeClosed } from 'react-icons/lu'
import { Link, useNavigate } from 'react-router'
import toast from 'react-hot-toast'
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
        // console.log(user)

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
        setLoading(false)
      })
      .catch(() => {
        toast.error('Unable to register. Please try again!', {
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
        const user = res.user
        setUser(user)
        // console.log(res.user);
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
        navigate('/')
      })
      .catch((err) => {
        console.log(err.message)
        toast.error('Unable to signin. Please try again!', {
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <title>AKM SkillVerse - Register</title>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Register now!
          </motion.h1>
          <motion.div
            className="card w-full max-w-md shrink-0 shadow-2xl bg-base-200/80 backdrop-blur-lg border rounded-2xl border-secondary/30 p-6 md:p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card-body p-0">
              {/* form */}
              <form className="flex flex-col gap-4" onSubmit={handleRegister}>
                {/* name */}
                <label className="font-medium">Name</label>
                <motion.input
                  name="name"
                  type="text"
                  className="input bg-base-100 border border-secondary/50 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-secondary outline-none"
                  placeholder="Enter Your Name"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />

                {/* photoURL */}
                <label className="font-medium">Photo URL</label>
                <motion.input
                  name="url"
                  type="text"
                  className="input bg-base-100 border border-secondary/50 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-secondary outline-none"
                  placeholder="Enter Your PhotoURL"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />

                {/* email */}
                <label className="font-medium">Email</label>
                <motion.input
                  name="email"
                  type="email"
                  className="input bg-base-100 border border-secondary/50 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-secondary outline-none"
                  placeholder="Enter Your Email"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />

                {/* password */}
                <label className="font-medium">Password</label>
                <div className="relative">
                  <motion.input
                    onChange={handlePassChange}
                    value={password}
                    name="password"
                    type={show ? 'text' : 'password'}
                    className="input bg-base-100 border border-secondary/50 rounded-lg placeholder-gray-400 w-full focus:ring-2 focus:ring-secondary outline-none"
                    placeholder="Enter Your Password"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.button
                    onClick={handleToggleEye}
                    className="cursor-pointer absolute top-3 right-3"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {show ? <LuEyeClosed /> : <LuEye />}
                  </motion.button>
                </div>

                <div>
                  <label className="label cursor-pointer justify-start gap-2">
                    <input name="terms" type="checkbox" className="checkbox checkbox-secondary" />
                    <span className="text-sm">Accept Our Terms & Conditions!</span>
                  </label>
                </div>

                {/* error messages */}
                {password && (
                  <motion.div
                    className="text-sm space-y-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    {error?.uppercase && (
                      <p className="text-error flex items-center gap-1">
                        Must include at least one uppercase letter!
                      </p>
                    )}
                    {error?.lowercase && (
                      <p className="text-error flex items-center gap-1">
                        Must include at least one lowercase letter!
                      </p>
                    )}
                    {error?.six_char && (
                      <p className="text-error flex items-center gap-1">
                        Must be at least six characters!
                      </p>
                    )}
                  </motion.div>
                )}

                <motion.button
                  disabled={!isPasswordValid}
                  type="submit"
                  className="btn btn-secondary text-white rounded-full font-bold w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isPasswordValid ? 1.02 : 1 }}
                  whileTap={{ scale: isPasswordValid ? 0.98 : 1 }}
                >
                  Register
                </motion.button>

                {/* google login */}
                <motion.button
                  onClick={handleSignInGoogle}
                  className="btn rounded-full text-black bg-white border-[#e5e5e5] w-full mt-2 flex items-center justify-center gap-2 hover:bg-gray-100"
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
                Already have an account?{' '}
                <Link
                  className="underline text-secondary font-semibold hover:text-primary"
                  to="/login"
                >
                  Login Now
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Register
