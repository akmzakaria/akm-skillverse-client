import { useLoaderData, useNavigate, useParams } from 'react-router'
import { motion } from 'framer-motion' // eslint-disable-line
import useAxios from '../Hooks/useAxios'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import toast from 'react-hot-toast'
import Loading from '../Pages/Loading'

const EditCourse = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const instance = useAxios()
  const [course, setCourse] = useState([])
  const { user } = useContext(AuthContext)

  const data = useLoaderData()
  const fltData = data.find((d) => d._id === id)

  useEffect(() => {
    if (user?.email) {
      instance
        .get(`/myaddedcourses/?email=${user.email}`)
        .then((res) => setCourse(res.data))
        .catch((err) => console.error('Fetch error:', err))
    }
  }, [user, instance])

  const handleUpdate = async (e) => {
    e.preventDefault()
    const form = e.target

    const updatedCourse = {
      title: form.title.value,
      image_url: form.image_url.value,
      price: form.price.value,
      duration: form.duration.value,
      category: form.category.value,
      description: form.description.value,
      email: user.email,
    }

    try {
      const res = await instance.patch(`/myaddedcourses/${id}`, updatedCourse)

      if (res.data.modifiedCount) {
        toast.success('Course updated successfully!', {
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
        navigate('/myaddedcourses')
      } else {
        toast('No changes made!', {
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
    } catch (error) {
      console.error('Update error:', error)
      toast.error('Failed to update course!', {
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
    }
  }

  if (!course) {
    return <Loading></Loading>
  }

  return (
    <motion.div
      className="min-h-screen py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <title>AKM SkillVerse - Edit Course</title>

      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Edit Course
        </motion.h1>

        <motion.div
          className="bg-base-200 rounded-2xl shadow-2xl p-6 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form onSubmit={handleUpdate} className="space-y-6">
            <div>
              <label className="label font-medium">
                <span className="label-text">Course Title *</span>
              </label>
              <input
                name="title"
                defaultValue={fltData.title}
                placeholder="e.g., Complete Web Development Bootcamp"
                className="input input-bordered w-full bg-base-100 focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            <div>
              <label className="label font-medium">
                <span className="label-text">Course Image URL *</span>
              </label>
              <input
                name="image_url"
                defaultValue={fltData.image_url}
                placeholder="https://example.com/image.jpg"
                className="input input-bordered w-full bg-base-100 focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="label font-medium">
                  <span className="label-text">Price ($) *</span>
                </label>
                <input
                  name="price"
                  type="number"
                  defaultValue={fltData.price}
                  placeholder="99"
                  min="0"
                  step="0.01"
                  className="input input-bordered w-full bg-base-100 focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <div>
                <label className="label font-medium">
                  <span className="label-text">Duration *</span>
                </label>
                <input
                  name="duration"
                  defaultValue={fltData.duration}
                  placeholder="e.g., 8 weeks"
                  className="input input-bordered w-full bg-base-100 focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <div>
                <label className="label font-medium">
                  <span className="label-text">Category *</span>
                </label>
                <input
                  name="category"
                  defaultValue={fltData.category}
                  placeholder="e.g., Web Development"
                  className="input input-bordered w-full bg-base-100 focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
            </div>

            <div>
              <label className="label font-medium">
                <span className="label-text">Course Description *</span>
              </label>
              <textarea
                name="description"
                defaultValue={fltData.description}
                placeholder="Describe what students will learn in this course..."
                className="textarea textarea-bordered w-full bg-base-100 focus:ring-2 focus:ring-secondary h-32"
                required
              />
            </div>

            <div className="flex gap-4 justify-center pt-4">
              <motion.button
                type="submit"
                className="btn btn-secondary btn-lg text-white px-12"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Update Course
              </motion.button>
              <motion.button
                type="button"
                onClick={() => navigate('/myaddedcourses')}
                className="btn btn-outline btn-lg px-12"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default EditCourse
