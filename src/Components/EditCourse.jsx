import { useNavigate, useParams } from 'react-router'
import useAxios from '../Hooks/useAxios'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import Swal from 'sweetalert2'

const EditCourse = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const instance = useAxios()
  const [course, setCourse] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (user?.email) {
      instance
        .get(`/myaddedcourses/${id}?email=${user.email}`)
        .then((res) => setCourse(res.data))
        .catch((err) => console.error('Fetch error:', err))
    }
  }, [id, user, instance])

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
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: 'Course updated successfully!',
          timer: 1500,
          showConfirmButton: false,
        })
        navigate('/myaddedcourses')
      } else {
        Swal.fire({
          icon: 'info',
          title: 'No changes made!',
          text: 'You didn’t update anything.',
        })
      }
    } catch (error) {
      console.error('Update error:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to update course!',
      })
    }
  }

  if (!course) {
    return <div className="text-center mt-10 text-lg">Loading course data...</div>
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 shadow-lg rounded-lg border">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Course</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          name="title"
          defaultValue={course.title}
          placeholder="Course Title"
          className="input input-bordered w-full"
          required
        />

        <input
          name="image_url"
          defaultValue={course.image_url}
          placeholder="Image URL"
          className="input input-bordered w-full"
          required
        />

        <input
          name="price"
          type="number"
          defaultValue={course.price}
          placeholder="Price ($)"
          className="input input-bordered w-full"
          required
        />

        <input
          name="duration"
          defaultValue={course.duration}
          placeholder="Duration (e.g., 6 weeks)"
          className="input input-bordered w-full"
          required
        />

        <input
          name="category"
          defaultValue={course.category}
          placeholder="Category (e.g., Web Development)"
          className="input input-bordered w-full"
          required
        />

        <textarea
          name="description"
          defaultValue={course.description}
          placeholder="Course Description"
          className="textarea textarea-bordered w-full"
          rows="4"
          required
        />

        <button className="btn btn-primary w-full mt-4">Update Course</button>
      </form>
    </div>
  )
}

export default EditCourse
