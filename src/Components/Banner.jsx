import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 pt-15 pb-15 mt-20 mb-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/banner.webp" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Learn with AKM SkillVerse</h1>
            <p className="py-6">
              Explore the most popular courses chosen by learners worldwide. Upgrade your skills,
              learn from experts, and take the next step toward your career goals with AKM
              SkillVerse.
            </p>
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
