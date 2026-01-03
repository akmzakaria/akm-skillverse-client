import { use, useEffect, useState } from 'react'
import { motion } from 'framer-motion' // eslint-disable-line
import { AuthContext } from '../Provider/AuthProvider'
import useAxios from '../Hooks/useAxios'
import { Link, useNavigation } from 'react-router'
import toast from 'react-hot-toast'
import Loading from '../Pages/Loading'

const MyEnrolledCourses = () => {
  const { user } = use(AuthContext)
  const [courses, setCourses] = useState([])
  const axiosInstance = useAxios()
  console.log(courses)

  useEffect(() => {
    axiosInstance.get(`/enrolled?email=${user.email}`).then((res) => {
      setCourses(res.data)
    })
  }, [user, axiosInstance])

  const handleRemoveCourse = (_id) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <p className="font-semibold">Remove this enrolled course?</p>
          <p className="text-sm text-gray-600">You can always enroll again later.</p>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => {
                toast.dismiss(t.id)
                fetch(`https://akm-skillverse-server.vercel.app/enrolled/${_id}`, {
                  method: 'DELETE',
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.deletedCount) {
                      toast.success('Course removed successfully!', {
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
                      const remainingCourses = courses.filter((course) => course._id !== _id)
                      setCourses(remainingCourses)
                    }
                  })
              }}
              className="btn btn-error btn-sm text-white"
            >
              Remove
            </button>
            <button onClick={() => toast.dismiss(t.id)} className="btn btn-ghost btn-sm">
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: Infinity,
        position: 'top-center',
        style: {
          background: '#fff',
          color: '#000',
          borderRadius: '12px',
          padding: '20px',
          maxWidth: '400px',
        },
      }
    )
  }

  const navigation = useNavigation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading></Loading>
  }

  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }

  return (
    <motion.div
      className="min-h-screen py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <title>AKM SkillVerse - My Enrolled Courses</title>

      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My Enrolled Courses
      </motion.h1>

      {courses.length === 0 ? (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-32 w-32 mx-auto text-base-content/20 mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <h2 className="text-2xl md:text-3xl font-bold text-base-content/70 mb-4">
            No Enrolled Courses Yet
          </h2>
          <p className="text-base-content/60 mb-6">
            Start learning today! Browse our courses and enroll in one.
          </p>
          <Link to="/allcourses" className="btn btn-secondary btn-lg text-white">
            Browse Courses
          </Link>
        </motion.div>
      ) : (
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course._id}
                className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <figure className="h-48 overflow-hidden">
                  <img
                    src={course.image_url}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-lg line-clamp-2">{course.title}</h2>
                  <div className="flex items-center gap-2 my-2">
                    <div className="badge badge-secondary text-white font-bold px-3 py-3">
                      ${course.price}
                    </div>
                  </div>
                  <div className="card-actions justify-between items-center mt-4">
                    <Link
                      to={`/coursedetails/${course.courseId}`}
                      className="btn btn-secondary btn-sm text-white"
                    >
                      View Details
                    </Link>
                    <motion.button
                      onClick={() => handleRemoveCourse(course._id)}
                      className="btn btn-outline btn-error btn-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Remove
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default MyEnrolledCourses
