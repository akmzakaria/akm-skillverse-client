import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { MdEventAvailable } from 'react-icons/md'
import { Link } from 'react-router'

const PopularCourses = ({ data }) => {
  const featuredCourses = data
    .filter((d) => d.isFeatured === true || d.isFeatured === 'true')
    .slice(0, 6)
    .sort((a, b) => b.price - a.price)

  return (
    <div>
      <h3 className="text-xl md:text-4xl mt-10 font-bold text-center">Popular Courses</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center md:max-w-[1400px] mx-auto">
        {featuredCourses.map((course) => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            key={course.price}
            className="flex flex-col shadow rounded-xl w-[300px] md:w-[300px] gap-2 p-4 bg-base-200  mt-5"
          >
            <img className="w-full h-40 rounded-2xl" src={course.image_url} />
            <h3 className="  text-sm font-medium md:text-xl">{course.title}</h3>
            <p className=" text-xs">Price: {course.price} $</p>

            <p className="text-[#00D390] flex gap-1 items-center">Category: {course.category}</p>
            <p className="text-[#FF8811] flex items-center gap-1">Duration: {course.duration}</p>

            <p>{course.description}</p>

            <Link to={`/coursedetails/${course._id}`} className="text-secondary">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularCourses
