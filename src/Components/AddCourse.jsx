import { use } from 'react'
import { motion } from 'framer-motion' // eslint-disable-line
import { AuthContext } from '../Provider/AuthProvider'
import useAxios from '../Hooks/useAxios'
import toast from 'react-hot-toast'
import { useNavigation } from 'react-router'
import Loading from '../Pages/Loading'

const AddCourse = () => {
  const { user } = use(AuthContext)
  const axiosInstance = useAxios()

  // console.log(user)

  const handleAddCourse = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const image_url = e.target.image_url.value
    const price = Number(e.target.price.value)
    const duration = e.target.duration.value
    const category = e.target.category.value
    const description = e.target.description.value
    const isFeatured = e.target.isFeatured.value
    // console.log(title, image, price, duration, category, description)

    const newCourse = {
      title,
      image_url,
      price,
      duration,
      category,
      description,
      email: user.email,
      isFeatured,
    }

    axiosInstance.post('/courses', newCourse).then((data) => {
      if (data.data.insertedId) {
        toast.success('Your course has been uploaded!', {
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
        e.target.reset()
      }
    })
  }

  const navigation = useNavigation()

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
      <title>AKM SkillVerse - Add Course</title>

      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Add New Course
        </motion.h1>

        <motion.div
          className="bg-base-200 rounded-2xl shadow-2xl p-6 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form onSubmit={handleAddCourse} className="space-y-6">
            {/* Instructor Details Section */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-secondary mb-4">
                Instructor Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label font-medium">
                    <span className="label-text">Instructor Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full bg-base-100 focus:ring-2 focus:ring-secondary"
                    placeholder="Enter instructor name"
                    value={user.displayName}
                    readOnly
                  />
                </div>

                <div>
                  <label className="label font-medium">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full bg-base-100 focus:ring-2 focus:ring-secondary"
                    placeholder="Enter email"
                    value={user.email}
                    readOnly
                  />
                </div>
              </div>

              <div>
                <label className="label font-medium">
                  <span className="label-text">Instructor Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  className="input input-bordered w-full bg-base-100 focus:ring-2 focus:ring-secondary"
                  placeholder="Enter photo URL"
                  value={user.photoURL}
                  readOnly
                />
              </div>
            </div>

            <div className="divider"></div>

            {/* Course Details Section */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-secondary mb-4">
                Course Details
              </h2>

              <div>
                <label className="label font-medium">
                  <span className="label-text">Course Title *</span>
                </label>
                <input
                  type="text"
                  name="title"
                  className="input input-bordered w-full bg-base-100 focus:ring-2 focus:ring-secondary"
                  placeholder="e.g., Complete Web Development Bootcamp"
                  required
                />
              </div>

              <div>
                <label className="label font-medium">
                  <span className="label-text">Course Image URL *</span>
                </label>
                <input
                  type="text"
                  name="image_url"
                  className="input input-bordered w-full bg-base-100 focus:ring-2 focus:ring-secondary"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="label font-medium">
                    <span className="label-text">Price ($) *</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    className="input input-bordered w-full bg-base-100 focus:ring-2 focus:ring-secondary"
                    placeholder="99"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>

                <div>
                  <label className="label font-medium">
                    <span className="label-text">Duration *</span>
                  </label>
                  <input
                    type="text"
                    name="duration"
                    className="input input-bordered w-full bg-base-100 focus:ring-2 focus:ring-secondary"
                    placeholder="e.g., 8 weeks"
                    required
                  />
                </div>

                <div>
                  <label className="label font-medium">
                    <span className="label-text">Category *</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    className="input input-bordered w-full bg-base-100 focus:ring-2 focus:ring-secondary"
                    placeholder="e.g., Web Development"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="label font-medium">
                  <span className="label-text">Featured Course *</span>
                </label>
                <select
                  name="isFeatured"
                  className="select select-bordered w-full bg-base-100 focus:ring-2 focus:ring-secondary"
                  required
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
                <label className="label">
                  <span className="label-text-alt text-base-content/60">
                    Featured courses appear on the homepage
                  </span>
                </label>
              </div>

              <div>
                <label className="label font-medium">
                  <span className="label-text">Course Description *</span>
                </label>
                <textarea
                  name="description"
                  className="textarea textarea-bordered w-full bg-base-100 focus:ring-2 focus:ring-secondary h-32"
                  placeholder="Describe what students will learn in this course..."
                  required
                />
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <motion.button
                type="submit"
                className="btn btn-secondary btn-lg text-white px-12"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add Course
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AddCourse
