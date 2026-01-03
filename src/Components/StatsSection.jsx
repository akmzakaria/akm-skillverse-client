import { motion } from 'framer-motion' // eslint-disable-line
import { FaUsers, FaStar, FaBook } from 'react-icons/fa6'

const StatsSection = () => {
  const stats = [
    {
      icon: FaUsers,
      label: 'Total Users',
      value: '29.6M',
      growth: '21% more than last month',
      color: 'text-primary',
    },
    {
      icon: FaStar,
      label: 'Total Reviews',
      value: '906K',
      growth: '46% more than last month',
      color: 'text-secondary',
    },
    {
      icon: FaBook,
      label: 'Available Courses',
      value: '132+',
      growth: '31 more coming soon',
      color: 'text-accent',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="text-center px-10 mt-20 py-16 rounded-2xl bg-linear-to-br from-base-300 to-base-200"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="mb-12 text-2xl md:text-4xl lg:text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Why Choose Us?
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-4 p-6 bg-base-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`text-5xl ${stat.color}`}
              >
                <stat.icon />
              </motion.div>
              <p className="text-sm md:text-base font-medium text-base-content/70">{stat.label}</p>
              <motion.h1
                className="font-extrabold text-4xl md:text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: 'spring' }}
              >
                {stat.value}
              </motion.h1>
              <p className="text-xs md:text-sm text-base-content/60">{stat.growth}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default StatsSection
