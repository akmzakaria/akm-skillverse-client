import { Link } from 'react-router'

const JoinUs = () => {
  const opportunities = [
    {
      title: 'Become an Instructor',
      description: 'Share your expertise and help thousands of students learn new skills.',
      benefits: ['Flexible schedule', 'Earn revenue', 'Build your brand', 'Global reach'],
      cta: 'Start Teaching',
      link: '/addcourse',
    },
    {
      title: 'Join as a Student',
      description: 'Access thousands of courses and learn from industry experts.',
      benefits: ['Learn at your pace', 'Get certified', 'Join community', 'Career growth'],
      cta: 'Start Learning',
      link: '/register',
    },
  ]

  const careers = [
    {
      role: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      role: 'Content Strategist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      role: 'Customer Success Manager',
      department: 'Support',
      location: 'Hybrid',
      type: 'Full-time',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Join Us</h1>
      <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
        Be part of our mission to make quality education accessible to everyone
      </p>

      {/* Opportunities Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {opportunities.map((opp, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-3">{opp.title}</h2>
              <p className="text-gray-700 mb-4">{opp.description}</p>
              <ul className="space-y-2 mb-6">
                {opp.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-secondary">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to={opp.link} className="btn btn-secondary">
                {opp.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Career Opportunities */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
        <p className="text-gray-600 mb-8">
          Join our team and help shape the future of online education
        </p>
        <div className="space-y-4">
          {careers.map((job, index) => (
            <div key={index} className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <div className="flex gap-4 mt-2 text-sm text-gray-600">
                      <span>📁 {job.department}</span>
                      <span>📍 {job.location}</span>
                      <span>⏰ {job.type}</span>
                    </div>
                  </div>
                  <Link to="/contact" className="btn btn-secondary mt-4 md:mt-0">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Join Us */}
      <div className="bg-secondary/10 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Why Join AKM SkillVerse?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">🚀 Growth Opportunities</h3>
            <p className="text-gray-700">Continuous learning and career development</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">🌍 Remote-First Culture</h3>
            <p className="text-gray-700">Work from anywhere in the world</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">💡 Innovation</h3>
            <p className="text-gray-700">Work on cutting-edge educational technology</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs
