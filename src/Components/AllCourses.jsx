import React, { useState, useContext } from 'react'
import { Link, useLoaderData } from 'react-router'
import useAxios from '../Hooks/useAxios'
import { AuthContext } from '../Provider/AuthProvider'
import Swal from 'sweetalert2'

const AllCourses = () => {
  const courses = useLoaderData()
  const { user } = useContext(AuthContext)
  const axiosInstance = useAxios()

  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(courses.map((course) => course.category))]

  const filteredCourses =
    selectedCategory === 'All'
      ? courses
      : courses.filter((course) => course.category === selectedCategory)

  const handleEnroll = (course) => {
    if (!user?.email) {
      Swal.fire({
        icon: 'warning',
        title: 'Please log in to enroll!',
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
        Swal.fire({
          icon: 'success',
          title: 'Enrolled Successfully!',
          showConfirmButton: false,
          timer: 2000,
        })
      } else {
        Swal.fire({
          icon: 'info',
          title: 'Already enrolled!',
        })
      }
    })
  }

  return (
    <div>
      <title>AKM SkillVerse - All Courses</title>
      <h3 className="text-xl md:text-4xl mt-10 font-bold text-center">All Courses</h3>

      {/*  Category Filter Dropdown */}
      <div className="flex justify-center mt-5 mb-5">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto md:px-30">
        <table className="table">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Course Title</th>
              <th>Price</th>
              <th>Actions</th>
              <th>Enrollment</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={course.image_url} alt="Course" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs md:text-[1rem] font-bold">{course.title}</div>
                      <div className="text-sm opacity-50">{course.category}</div>
                    </div>
                  </div>
                </td>
                <td className="text-xs md:text-[1rem]">{course.price}$</td>
                <td>
                  <Link
                    to={`/coursedetails/${course._id}`}
                    className="text-secondary text-xs md:text-[1rem]"
                  >
                    View Details
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleEnroll(course)} className="btn btn-outline btn-xs">
                    Enroll Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredCourses.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No courses found in this category.</p>
        )}
      </div>
    </div>
  )
}

export default AllCourses
