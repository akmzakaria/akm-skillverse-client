const CustomerStories = () => {
  const stories = [
    {
      name: 'Sarah Johnson',
      role: 'Full Stack Developer',
      company: 'Tech Innovations Inc.',
      image: '/logo.png',
      story:
        'AKM SkillVerse helped me transition from marketing to web development. The courses were comprehensive and the instructors were incredibly supportive. Within 6 months, I landed my dream job!',
    },
    {
      name: 'Ahmed Rahman',
      role: 'UI/UX Designer',
      company: 'Creative Studios',
      image: '/logo.png',
      story:
        'The UI/UX courses on AKM SkillVerse transformed my career. The practical projects and real-world examples gave me the confidence to start freelancing. Now I work with clients worldwide.',
    },
    {
      name: 'Maria Garcia',
      role: 'Data Scientist',
      company: 'Analytics Pro',
      image: '/logo.png',
      story:
        'As someone with no coding background, I was nervous about learning data science. AKM SkillVerse made it accessible and engaging. The step-by-step approach was perfect for beginners.',
    },
    {
      name: 'David Chen',
      role: 'Cybersecurity Specialist',
      company: 'SecureNet Solutions',
      image: '/logo.png',
      story:
        'The cybersecurity courses are top-notch. They cover everything from basics to advanced penetration testing. The certifications I earned helped me get promoted at my company.',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Customer Stories</h1>
      <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
        Real stories from real learners who transformed their careers with AKM SkillVerse
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {stories.map((story, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-4">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src={story.image} alt={story.name} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{story.name}</h3>
                  <p className="text-sm text-gray-600">{story.role}</p>
                  <p className="text-sm text-secondary">{story.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{story.story}"</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center bg-secondary/10 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h2>
        <p className="text-gray-700 mb-6">
          Join thousands of learners who have transformed their careers with AKM SkillVerse
        </p>
        <a href="/allcourses" className="btn btn-secondary">
          Browse Courses
        </a>
      </div>
    </div>
  )
}

export default CustomerStories
