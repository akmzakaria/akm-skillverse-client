import React, { use, useEffect, useState } from 'react'
import { Link } from 'react-router'
import useAxios from '../Hooks/useAxios'
import { AuthContext } from '../Provider/AuthProvider'
import Swal from 'sweetalert2'

const MyAddedCourses = () => {
  const { user } = use(AuthContext)
  const [courses, setCourses] = useState([])
  const instance = useAxios()

  //   console.log('token', user.accessToken);

  useEffect(() => {
    instance.get(`/myaddedcourses/?email=${user.email}`).then((data) => {
      setCourses(data.data)
    })
  }, [user, instance])

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
        fetch(`https://akm-skillverse-server.vercel.app/myaddedcourses/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('after delete', data)
            if (data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your course has been deleted.',
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
      <title>AKM SkillVerse - My Added Courses</title>
      <h3 className="text-xl md:text-3xl font-bold text-center my-5">My Added Courses</h3>
      <div className="overflow-x-auto md:px-30">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Course Title</th>
              <th>Price</th>
              <th>Course Details</th>
              <th>Actions</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
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
                      <div className="font-bold text-xs md:text-[1rem]">{course.title}</div>
                    </div>
                  </div>
                </td>
                <td>{course.price} $</td>

                <td>
                  <Link
                    to={`/coursedetails/${course._id}`}
                    className="text-secondary text-xs md:text-[1rem]"
                  >
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

                <td>
                  <Link to={`/editcourse/${course._id}`} className="btn btn-xs btn-outline">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyAddedCourses
