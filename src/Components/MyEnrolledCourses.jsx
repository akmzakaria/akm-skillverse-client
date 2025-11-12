import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import useAxios from '../Hooks/useAxios'
import { Link } from 'react-router'
import Swal from 'sweetalert2'

const MyEnrolledCourses = () => {
  const { user } = use(AuthContext)
  const [courses, setCourses] = useState([])
  const axiosInstance = useAxios()

  useEffect(() => {
    axiosInstance.get(`/enrolled?email=${user.email}`).then((res) => {
      setCourses(res.data)
    })
  }, [user, axiosInstance])

  const handleRemoveCourse = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/enrolled/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('after delete', data)
            if (data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your enrolled course has been removed.',
                icon: 'success',
              })

              //
              const remainingCourses = courses.filter((course) => course._id !== _id)
              setCourses(remainingCourses)
            }
          })
      }
    })
  }

  return (
    <div>
      <h3 className="text-3xl my-5 font-bold text-center">My Enrolled Courses</h3>

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
                        <img src="/banner.webp" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{course.title}</div>
                    </div>
                  </div>
                </td>
                <td>{course.price} $</td>
                <td>
                  <Link to={`/coursedetails/${course.courseId}`} className="text-secondary">
                    View Details
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleRemoveCourse(course._id)}
                    className="btn btn-outline btn-xs"
                  >
                    Remove
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

export default MyEnrolledCourses
