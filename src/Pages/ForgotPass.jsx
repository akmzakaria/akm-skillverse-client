import { use, useState } from 'react'
import { motion } from 'framer-motion' // eslint-disable-line
import { Link, useLocation, useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import { AuthContext } from '../Provider/AuthProvider'

const ForgotPass = () => {
  const { fotgotpass } = use(AuthContext)

  const location = useLocation()
  const [email, setEmail] = useState(location.state?.email || '')

  const handleReset = (e) => {
    e.preventDefault()
    // Redirect to Gmail with pre-filled "To" field
    // window.open(`https://mail.google.com/mail/?view=cm&to=${email}`, '_blank');

    fotgotpass(email)
      .then(() => {
        toast.success('Reset email sent! Please check your email.', {
          duration: 4000,
          position: 'top-center',
          style: {
            background: '#3B82F6',
            color: '#fff',
            fontWeight: '600',
            borderRadius: '12px',
            padding: '16px',
          },
        })
        setTimeout(() => {
          window.open('https://mail.google.com/mail/u/0/#inbox', '_blank')
        }, 2000)
      })
      .catch(() => {
        toast.error('Something went wrong! Please try again later.', {
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
      <title>AKM SkillVerse - Reset Password</title>
      <div className="hero-content flex-col">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Reset Password
        </motion.h1>

        <motion.div
          className="card w-full max-w-md bg-base-200/80 backdrop-blur-lg rounded-2xl border border-secondary/30 shadow-2xl p-6 md:p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form onSubmit={handleReset} className="flex flex-col gap-4">
            <label className="font-medium">Email</label>
            <motion.input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input bg-base-100 border border-secondary/50 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-secondary outline-none"
              required
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <div className="flex justify-center">
              <motion.button
                type="submit"
                className="btn btn-secondary text-white rounded-full px-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reset Password
              </motion.button>
            </div>
          </form>
        </motion.div>
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-base-content/60 mb-2">Or</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to={-1} className="btn btn-outline btn-secondary rounded-full">
              Go Back
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ForgotPass
