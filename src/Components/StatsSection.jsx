import React from 'react'

const StatsSection = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="text-center p-10 mt-20 md:p-20 bg-base-300  "
    >
      <div className="md:max-w-[1600px] mx-auto">
        <h1 className="mb-5 text-xl md:text-5xl font-bold">Why Choose Us?</h1>

        <div className="flex flex-col md:flex-row md:justify-around gap-10">
          <div className="flex flex-col text-xs md:text-[1rem] md:gap-3">
            <p>Total Users</p>
            <h1 className="font-extrabold text-2xl md:text-6xl">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div className="flex flex-col text-xs md:text-[1rem] md:gap-3">
            <p>Total Reviews</p>
            <h1 className="font-extrabold text-2xl md:text-6xl">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div className="flex flex-col text-xs md:text-[1rem] md:gap-3">
            <p>Available Courses</p>
            <h1 className="font-extrabold text-2xl md:text-6xl">132+</h1>
            <p>31 more coming soon</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsSection
