import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { Navigation } from 'swiper/modules'
import { Pagination } from 'swiper/modules'
import { Autoplay } from 'swiper/modules'

import img1 from '../assets/instructor1.jpg'
import img2 from '../assets/instructor2.jpg'
import img3 from '../assets/instructor3.jpg'
import img4 from '../assets/instructor4.webp'
import img5 from '../assets/instructor5.jpg'

const Slider = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="max-w-11/12 mb-20 mt-20 mx-auto"
    >
      <h3 className="font-bold text-xl md:text-5xl mb-10 text-center">Top Instructors</h3>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="lg:w-[900px] xl:w-[1000px] rounded-2xl h-75 md:h-[450px]"
      >
        <SwiperSlide>
          <img src={img1} className="w-full h-full object-fit" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="w-full h-full object-fit" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="w-full h-full object-fit" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="w-full h-full object-fit" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} className="w-full h-full object-fit" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
