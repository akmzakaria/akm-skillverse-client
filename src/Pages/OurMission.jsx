const OurMission = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Our Mission</h1>

      <div className="prose lg:prose-lg">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Empowering Learners Worldwide</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At AKM SkillVerse, our mission is to democratize education and make quality learning
            accessible to everyone, everywhere. We believe that knowledge should have no boundaries
            and that every individual deserves the opportunity to develop their skills and achieve
            their full potential.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We envision a world where learning is continuous, engaging, and tailored to individual
            needs. Through cutting-edge technology and expert instruction, we strive to create a
            platform that not only teaches skills but also inspires innovation and creativity.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="font-semibold mr-2">Excellence:</span>
              <span className="text-gray-700">
                We maintain the highest standards in course quality and instruction.
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Accessibility:</span>
              <span className="text-gray-700">
                We make learning available to everyone, regardless of location or background.
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Innovation:</span>
              <span className="text-gray-700">
                We continuously evolve our platform to meet the changing needs of learners.
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Community:</span>
              <span className="text-gray-700">
                We foster a supportive environment where learners and instructors thrive together.
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-secondary/10 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you're a student looking to learn new skills or an instructor wanting to share
            your expertise, AKM SkillVerse is your partner in growth. Together, we're building a
            future where education knows no limits.
          </p>
        </section>
      </div>
    </div>
  )
}

export default OurMission
