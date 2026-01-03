const AboutUs = () => {
  return (
    <section className="pt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold mb-4">
            About <span className="text-secondary">AKMSkillVerse</span>
          </h2>
          <p className=" max-w-3xl mx-auto">
            A next-generation learning platform built to turn skills into opportunities.
          </p>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className=" leading-relaxed mb-6">
            AKMSkillVerse helps students and professionals upgrade their skills through
            high-quality, practical courses designed for real-world success. We focus on learning
            that actually matters.
          </p>
          <p className=" leading-relaxed">
            From web development and design to data science and emerging technologies, we provide
            expert-led courses, structured paths, and a supportive community to help you grow with
            confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl  backdrop-blur shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-3">Our Vision</h3>
            <p className="">
              To become a trusted global platform for skill-based, future-ready learning.
            </p>
          </div>

          <div className="p-8 rounded-2xl  backdrop-blur shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-3">Our Mission</h3>
            <p className="">
              Empower learners with practical knowledge and industry-relevant skills.
            </p>
          </div>

          <div className="p-8 rounded-2xl  backdrop-blur shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-3">Our Values</h3>
            <p className="">Quality education, continuous improvement, and learner success.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
