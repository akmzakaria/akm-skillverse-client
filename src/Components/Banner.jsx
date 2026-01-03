import { Link } from 'react-router'
import { motion } from 'framer-motion' // eslint-disable-line

const Banner = () => {
  return (
    <div className="hero bg-linear-to-br rounded-2xl from-base-200 to-base-300 py-12 md:py-20 mt-16 mb-16">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between pl-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1"
        >
          <img
            src="/banner.webp"
            className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl object-cover"
            alt="Learning Banner"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex-1"
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Learn with <span className="text-secondary">AKM SkillVerse</span>
          </motion.h1>
          <motion.p
            className="py-6 text-sm md:text-base lg:text-lg text-base-content/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Explore the most popular courses chosen by learners worldwide. Upgrade your skills,
            learn from experts, and take the next step toward your career goals with AKM SkillVerse.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              to={'/allcourses'}
              className="btn btn-secondary btn-lg text-white hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Banner
