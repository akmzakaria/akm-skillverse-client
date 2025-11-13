import React from 'react'

const Banner = () => {
  return (
    <div data-aos="fade-up" className="hero bg-base-200 pt-15 pb-15 mt-20 mb-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/banner.webp" className=" w-fit rounded-lg shadow-2xl" />
        <div>
          <h1 className="md:text-3xl lg:text-5xl text-xl font-bold">Learn with AKM SkillVerse</h1>
          <p className="py-6 text-xs md:text-[1rem]">
            Explore the most popular courses chosen by learners worldwide. Upgrade your skills,
            learn from experts, and take the next step toward your career goals with AKM SkillVerse.
          </p>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
