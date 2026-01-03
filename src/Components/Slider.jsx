import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion' // eslint-disable-line
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow'

import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'

import img1 from '../assets/instructor1.jpg'
import img2 from '../assets/instructor2.jpg'
import img3 from '../assets/instructor3.jpg'
import img4 from '../assets/instructor4.webp'
import img5 from '../assets/instructor5.jpg'

const Slider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mb-20 mt-20 mx-auto px-4"
    >
      <motion.h3
        className="font-bold text-2xl md:text-4xl lg:text-5xl mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Top Instructors
      </motion.h3>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full max-w-5xl rounded-2xl"
        style={{ paddingBottom: '50px' }}
      >
        <SwiperSlide
          style={{ width: '300px', height: '400px' }}
          className="md:w-[400px] md:h-[500px]"
        >
          <img src={img1} className="w-full h-full object-cover rounded-xl" alt="Instructor 1" />
        </SwiperSlide>
        <SwiperSlide
          style={{ width: '300px', height: '400px' }}
          className="md:w-[400px] md:h-[500px]"
        >
          <img src={img2} className="w-full h-full object-cover rounded-xl" alt="Instructor 2" />
        </SwiperSlide>
        <SwiperSlide
          style={{ width: '300px', height: '400px' }}
          className="md:w-[400px] md:h-[500px]"
        >
          <img src={img3} className="w-full h-full object-cover rounded-xl" alt="Instructor 3" />
        </SwiperSlide>
        <SwiperSlide
          style={{ width: '300px', height: '400px' }}
          className="md:w-[400px] md:h-[500px]"
        >
          <img src={img4} className="w-full h-full object-cover rounded-xl" alt="Instructor 4" />
        </SwiperSlide>
        <SwiperSlide
          style={{ width: '300px', height: '400px' }}
          className="md:w-[400px] md:h-[500px]"
        >
          <img src={img5} className="w-full h-full object-cover rounded-xl" alt="Instructor 5" />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  )
}

export default Slider
