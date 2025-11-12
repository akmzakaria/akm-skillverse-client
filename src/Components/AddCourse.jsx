import React, { use } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import useAxios from '../Hooks/useAxios'
import Swal from 'sweetalert2'

const AddCourse = () => {
  const axiosInstance = useAxios()
  const { user } = use(AuthContext)

  const handleAddCourse = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const image = e.target.image.value
    const price = e.target.price.value
    const duration = e.target.duration.value
    const category = e.target.category.value
    const description = e.target.description.value
    console.log(title, image, price, duration, category, description)

    const newCourse = {
      title,
      image,
      price,
      duration,
      category,
      description,
      email: user.email,
    }

    axiosInstance.post('/courses', newCourse).then((data) => {
      console.log(data.data)
      if (data.data.insertedId) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your course has been uploaded!',
          showConfirmButton: false,
          timer: 2000,
        })
        e.target.reset()
      }
    })
  }

  return (
    <div className="mt-5">
      <title>AKM SkillVerse - Add Course</title>
      <div className="lg:w-1/2 mx-auto px-10">
        <form className="" onSubmit={handleAddCourse}>
          <fieldset className="fieldset">
            <label className="">Title</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="Enter a itle"
              required
            />
            <label className="">Image URL</label>
            <input
              type="text"
              name="image"
              className="input w-full"
              placeholder="Enter an image URL"
            />

            <label className="">Price</label>
            <input type="text" name="price" className="input w-full" placeholder="Price" required />

            <label className="">Duration</label>
            <input
              type="text"
              name="duration"
              className="input w-full"
              placeholder="Duration"
              required
            />

            <label className="">Category</label>
            <input
              type="text"
              name="category"
              className="input w-full"
              placeholder="Category"
              required
            />

            <label className="">Description</label>
            <textarea
              name="description"
              className="textarea w-full"
              placeholder="Write about the course"
              rows="5"
              required
            />

            <button className="btn btn-neutral mt-4">Add A Course</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default AddCourse
