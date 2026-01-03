import { Link } from 'react-router'
import { motion } from 'framer-motion' // eslint-disable-line
import { FaClock, FaTag } from 'react-icons/fa6'

const PopularCourses = ({ data }) => {
  const featuredCourses = data
    .filter((d) => d.isFeatured === true || d.isFeatured === 'true')
    .slice(0, 6)
    .sort((a, b) => b.price - a.price)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="py-16 px-4">
      <motion.h3
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Popular Courses
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {featuredCourses.map((course) => (
          <motion.div
            key={course._id}
            variants={item}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <figure className="relative h-48 overflow-hidden">
              <motion.img
                src={course.image_url}
                alt={course.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute top-3 right-3 badge badge-secondary text-white font-bold px-3 py-3">
                ${course.price}
              </div>
            </figure>
            <div className="card-body p-5">
              <h3 className="card-title text-base md:text-lg font-semibold line-clamp-2 min-h-[3.5rem]">
                {course.title}
              </h3>

              <div className="flex flex-wrap gap-2 my-2">
                <div className="badge badge-outline gap-1">
                  <FaTag className="text-xs" />
                  {course.category}
                </div>
                <div className="badge badge-outline gap-1">
                  <FaClock className="text-xs" />
                  {course.duration}
                </div>
              </div>

              <p className="text-sm text-base-content/70 line-clamp-3 mb-4">{course.description}</p>

              <div className="card-actions justify-end">
                <Link
                  to={`/coursedetails/${course._id}`}
                  className="btn btn-secondary btn-sm text-white hover:scale-105 transition-transform"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default PopularCourses
