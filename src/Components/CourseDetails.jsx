import { use, useState } from 'react'
import { motion } from 'framer-motion' // eslint-disable-line
import { BiSend } from 'react-icons/bi'
import { MdOutlinePriceCheck } from 'react-icons/md'
import { Link, useLoaderData, useNavigation, useParams } from 'react-router'
import toast from 'react-hot-toast'
import useAxios from '../Hooks/useAxios'
import { AuthContext } from '../Provider/AuthProvider'
import Loading from '../Pages/Loading'

const CourseDetails = () => {
  const { user } = use(AuthContext)
  const axiosInstance = useAxios()

  const data = useLoaderData()

  const { id } = useParams()
  //   console.log(id)

  const fltData = data.find((d) => d._id === id)

  const [success, setSuccess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess('Successfully Sent!')
    e.target.reset()
    setTimeout(() => setSuccess(''), 5000)
  }

  const handleEnroll = (course) => {
    if (!user?.email) {
      toast.error('Please log in to enroll!', {
        duration: 3000,
        position: 'top-center',
        style: {
          background: '#F59E0B',
          color: '#fff',
          fontWeight: '600',
          borderRadius: '12px',
          padding: '16px',
        },
      })
      return
    }

    const enrollmentData = {
      courseId: course._id,
      image_url: course.image_url,
      title: course.title,
      price: course.price,
      email: user.email,
    }

    axiosInstance.post('/enrolled', enrollmentData).then((res) => {
      if (res.data.insertedId) {
        toast.success('Enrolled Successfully!', {
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
      } else {
        toast('Already enrolled!', {
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
      }
    })
  }

  const navigation = useNavigation()

  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="min-h-screen pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <title>AKM SkillVerse - Course Details</title>

          {/* Course details */}
          <motion.div
            className="flex md:flex-row flex-col items-center md:items-start md:gap-10 gap-6 p-6 md:p-10 bg-base-200 rounded-2xl shadow-xl mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              className="rounded-2xl object-cover h-64 w-64 md:h-96 md:w-96 shadow-2xl"
              src={fltData.image_url}
              alt={fltData.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            <div className="flex flex-col gap-4 md:gap-5 flex-1">
              <motion.h3
                className="font-bold text-center md:text-start text-2xl md:text-4xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {fltData.title}
              </motion.h3>

              <motion.p
                className="text-sm md:text-base text-center md:text-left font-semibold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Category: <span className="font-medium text-secondary">{fltData.category}</span>
              </motion.p>

              <motion.div
                className="flex gap-6 md:gap-10 mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex flex-col gap-2 bg-base-100 p-4 rounded-xl shadow-md">
                  <div className="flex gap-2 items-center text-secondary">
                    <MdOutlinePriceCheck className="text-3xl md:text-4xl" />
                    <p className="text-sm md:text-base">Price</p>
                  </div>
                  <h1 className="font-extrabold text-2xl md:text-3xl">${fltData.price}</h1>
                </div>
              </motion.div>

              <motion.p
                className="font-semibold text-sm md:text-base"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Duration: <span className="text-secondary font-medium">{fltData.duration}</span>
              </motion.p>

              <motion.p
                className="mt-3 text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {fltData.description}
              </motion.p>

              <motion.button
                onClick={() => handleEnroll(fltData)}
                className="btn btn-secondary btn-lg text-white w-fit mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Enroll Now
              </motion.button>
            </div>
          </motion.div>

          {/* Feedback form */}
          <motion.div
            className="flex justify-center px-2 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card border border-secondary/30 w-full max-w-md shadow-2xl rounded-2xl bg-base-200">
              <form onSubmit={handleSubmit} className="card-body">
                <h2 className="text-xl md:text-2xl font-bold text-center mb-4">Send Feedback</h2>

                <label className="font-medium text-sm md:text-base">Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 border border-secondary/50 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-secondary outline-none bg-base-100"
                  placeholder="Enter your email"
                  required
                />

                <label className="font-medium text-sm md:text-base mt-3">Feedback</label>
                <textarea
                  name="Feedback"
                  className="w-full px-4 py-3 border border-secondary/50 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-secondary outline-none bg-base-100"
                  placeholder="Enter your feedback"
                  rows={5}
                  required
                />

                {success && (
                  <motion.div
                    className="text-green-500 flex gap-2 items-center justify-center font-medium mt-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BiSend />
                    {success}
                  </motion.div>
                )}

                <div className="flex justify-center">
                  <motion.button
                    type="submit"
                    className="btn btn-secondary text-white rounded-full mt-4 px-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Us
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Back button */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-base-content/60 mb-2">Or</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to={-1} className="btn btn-outline btn-secondary rounded-full">
                Go Back
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default CourseDetails
