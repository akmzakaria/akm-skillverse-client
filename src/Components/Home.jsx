import { useEffect } from 'react'
import { motion } from 'framer-motion' // eslint-disable-line
import Banner from './Banner'
import PopularCourses from './PopularCourses'
import { useLoaderData, useNavigation } from 'react-router'
import StatsSection from './StatsSection'
import Slider from './Slider'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Loading from '../Pages/Loading'
import { Blogs, Categories, FAQ, Highlights, Newsletter } from './AKMSkillVerseSections'
import Testimonials from './Testimonials'

const Home = () => {
  const data = useLoaderData()

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const navigation = useNavigation()

  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }

  return (
    <motion.div
      className="max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Banner />
      <PopularCourses data={data} />
      <Categories />
      <Highlights />
      <StatsSection />
      <Slider />
      <Testimonials />
      <Blogs />
      <FAQ />
      <Newsletter />
    </motion.div>
  )
}

export default Home
