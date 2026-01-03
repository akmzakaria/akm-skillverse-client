import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rahim Ahmed',
      role: 'Frontend Developer',
      comment:
        'AKMSkillVerse completely changed my learning journey. The courses are practical and easy to follow.',
    },
    {
      name: 'Karima Khan',
      role: 'UI/UX Designer',
      comment: 'The instructors explain concepts so clearly. Highly recommended for beginners!',
    },
    {
      name: 'Rakib Hasan',
      role: 'Student',
      comment: 'I enrolled in multiple courses and every one of them was worth it.',
    },
  ]

  return (
    <section className="bg-linear-to-br from-base-300 to-base-200 p-10 rounded-lg my-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10">What Our Students Say</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-base-100 p-6 rounded-xl shadow-md h-full">
                <p className="italic text-gray-500 mb-4">“{item.comment}”</p>
                <h4 className="font-semibold">{item.name}</h4>
                <span className="text-sm text-gray-500">{item.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
