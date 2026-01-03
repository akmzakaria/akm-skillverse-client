import { useState, useContext } from 'react'
import { Link, useLoaderData, useNavigation } from 'react-router'
import { motion } from 'framer-motion' // eslint-disable-line
import toast from 'react-hot-toast'
import useAxios from '../Hooks/useAxios'
import { AuthContext } from '../Provider/AuthProvider'
import Loading from '../Pages/Loading'

const AllCourses = () => {
  const courses = useLoaderData()
  const { user } = useContext(AuthContext)
  const axiosInstance = useAxios()

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', ...new Set(courses.map((course) => course.category))]

  const filteredCourses = courses
    .filter((course) => selectedCategory === 'All' || course.category === selectedCategory)
    .filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

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

  // useEffect(() => {
  //   setLoading(true)
  //   axiosInstance
  //     .get('/courses') // replace with your API endpoint
  //     .then((res) => setCourses(res.data))
  //     .catch((err) => console.error(err))
  //     .finally(() => setLoading(false))
  // }, [axiosInstance, setLoading])

  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 500)
  //   return () => clearTimeout(timer)
  // }, [])

  // if (loading) {
  //   return <Loading></Loading>
  // }

  const navigation = useNavigation()

  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <title>AKM SkillVerse - All Courses</title>
      <motion.h3
        className="text-2xl md:text-4xl lg:text-5xl mt-10 font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        All Courses
      </motion.h3>

      {/* Search and Filter Section */}
      <motion.div
        className="max-w-7xl mx-auto mb-8 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Search Bar */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search courses by title, category, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-bordered w-full pr-12 shadow-md focus:ring-2 focus:ring-secondary bg-base-100"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-base-content/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Category Filter and Results Count */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="select select-bordered w-full md:w-auto shadow-md hover:shadow-lg transition-shadow"
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat === 'All' ? 'All Categories' : cat}
              </option>
            ))}
          </select>

          <div className="text-sm md:text-base text-base-content/70">
            Showing <span className="font-bold text-secondary">{filteredCourses.length}</span>{' '}
            {filteredCourses.length === 1 ? 'course' : 'courses'}
          </div>
        </div>

        {/* Active Filters */}
        {(searchQuery || selectedCategory !== 'All') && (
          <div className="flex flex-wrap gap-2 justify-center">
            {searchQuery && (
              <div className="badge badge-secondary gap-2 p-3">
                Search: "{searchQuery}"
                <button
                  onClick={() => setSearchQuery('')}
                  className="hover:text-error transition-colors"
                >
                  ✕
                </button>
              </div>
            )}
            {selectedCategory !== 'All' && (
              <div className="badge badge-primary gap-2 p-3">
                Category: {selectedCategory}
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="hover:text-error transition-colors"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
        )}
      </motion.div>

      <div className="overflow-x-auto max-w-7xl mx-auto shadow-xl rounded-2xl">
        <table className="table table-zebra">
          <thead className="bg-base-300">
            <tr>
              <th className="text-sm md:text-base">SL No.</th>
              <th className="text-sm md:text-base">Course Title</th>
              <th className="text-sm md:text-base">Price</th>
              <th className="text-sm md:text-base">Actions</th>
              <th className="text-sm md:text-base">Enrollment</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
              >
                <th className="text-xs md:text-sm">{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12 md:h-16 md:w-16">
                        <img src={course.image_url} alt="Course" className="object-cover" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs md:text-base font-bold line-clamp-2">
                        {course.title}
                      </div>
                      <div className="text-xs md:text-sm opacity-50">{course.category}</div>
                    </div>
                  </div>
                </td>
                <td className="text-xs md:text-base font-semibold text-secondary">
                  ${course.price}
                </td>
                <td>
                  <Link
                    to={`/coursedetails/${course._id}`}
                    className="text-secondary text-xs md:text-base hover:underline font-medium"
                  >
                    View Details
                  </Link>
                </td>
                <td>
                  <motion.button
                    onClick={() => handleEnroll(course)}
                    className="btn btn-outline btn-secondary btn-xs md:btn-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Enroll Now
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>

        {filteredCourses.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 mx-auto text-base-content/20 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-lg md:text-xl font-semibold text-base-content/70 mb-2">
              No courses found
            </p>
            <p className="text-sm text-base-content/50">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AllCourses
