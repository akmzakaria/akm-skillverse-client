import { useLoaderData, useNavigate, useParams } from 'react-router'
import useAxios from '../Hooks/useAxios'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import Swal from 'sweetalert2'
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
          text: "You didn't update anything.",
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
    return <Loading></Loading>
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 shadow-lg rounded-lg border">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Course</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          name="title"
          defaultValue={fltData.title}
          placeholder="Course Title"
          className="input input-bordered w-full"
          required
        />

        <input
          name="image_url"
          defaultValue={fltData.image_url}
          placeholder="Image URL"
          className="input input-bordered w-full"
          required
        />

        <input
          name="price"
          type="number"
          defaultValue={fltData.price}
          placeholder="Enter a price"
          className="input input-bordered w-full"
          required
        />

        <input
          name="duration"
          defaultValue={fltData.duration}
          placeholder="Course duration"
          className="input input-bordered w-full"
          required
        />

        <input
          name="category"
          defaultValue={fltData.category}
          placeholder="Enter a category"
          className="input input-bordered w-full"
          required
        />

        <textarea
          name="description"
          defaultValue={fltData.description}
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
