import React, { use } from 'react'
import { Link, useLoaderData } from 'react-router'
import useAxios from '../Hooks/useAxios'
import { AuthContext } from '../Provider/AuthProvider'
import Swal from 'sweetalert2'

const AllCourses = () => {
  const courses = useLoaderData()
  const { user } = use(AuthContext)
  const axiosInstance = useAxios()

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
      title: course.title,
      price: course.price,
      email: user.email,
    }

    axiosInstance.post('/enrolled', enrollmentData).then((res) => {
      // console.log(res.data)
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
      <h3 className="text-xl md:text-4xl mt-10 font-bold text-center">All Courses</h3>

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
            {courses.map((course, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={course.image_url} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs md:text-[1rem] font-bold">{course.title}</div>
                    </div>
                  </div>
                </td>
                <td className="text-xs md:text-[1rem]">{course.price} $</td>
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
      </div>
    </div>
  )
}

export default AllCourses
