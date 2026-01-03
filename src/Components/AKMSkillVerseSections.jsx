// AKMSkillVerse – Reusable UI Components
// Tech stack assumed: React + TailwindCSS
// You can import and use these components anywhere in your project

// Using React JSX (no explicit React import needed in modern React)

/* =========================
   Categories
========================= */
export const Categories = () => {
  const categories = [
    'Web Development',
    'UI/UX Design',
    'Data Science',
    'AI & ML',
    'Mobile App Development',
    'Cyber Security',
  ]

  return (
    <section className="bg-linear-to-br from-base-300 to-base-200 p-10 mt-20 rounded-lg mb-10">
      <h2 className="text-2xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="p-4 text-center hover:-translate-y-1 transition-all rounded-xl shadow hover:shadow-lg cursor-pointer bg-base-100"
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  )
}

/* =========================
   Highlights
========================= */
export const Highlights = () => {
  const highlights = [
    { title: 'Expert Instructors', desc: 'Learn from industry professionals' },
    { title: 'Flexible Learning', desc: 'Learn at your own pace' },
    { title: 'Certified Courses', desc: 'Get recognized certificates' },
  ]

  return (
    <section className="bg-linear-to-br from-base-300 to-base-200 mt-20 p-10 rounded-lg">
      <h2 className="text-2xl font-bold mb-5">Highlights</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow bg-base-100 hover:scale-105 transition-all"
          >
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* =========================
   Testimonials
========================= */
// export const Testimonials = () => {
//   const testimonials = [
//     {
//       name: 'Rahim',
//       comment: 'AKMSkillVerse helped me land my first dev job!',
//     },
//     {
//       name: 'Karima',
//       comment: 'Courses are well-structured and easy to follow.',
//     },
//   ]

//   return (
//     <section className="py-12 bg-gray-50">
//       <h2 className="text-2xl font-bold mb-6">What Students Say</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         {testimonials.map((t, index) => (
//           <div key={index} className="p-6 bg-white rounded-xl shadow">
//             <p className="italic mb-3">“{t.comment}”</p>
//             <h4 className="font-semibold">— {t.name}</h4>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

/* =========================
   Blogs
========================= */
export const Blogs = () => {
  const blogs = [
    { title: 'Why Learn React in 2026?', date: 'Jan 2026' },
    { title: 'Top Skills for Future Developers', date: 'Dec 2025' },
  ]

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Latest Blogs</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="p-6 bg-base-100 rounded-xl shadow">
            <h3 className="font-semibold text-lg">{blog.title}</h3>
            <p className="text-gray-500 text-sm">{blog.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* =========================
   Newsletter
========================= */
export const Newsletter = () => {
  return (
    <section className="p-12 bg-secondary text-white rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <p className="mb-6">Get updates about new courses and offers</p>
      <form className="flex flex-col md:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded border bg-gray-50 border-blue-800 text-black w-full"
        />
        <button className="bg-black px-6 py-3 cursor-pointer hover:-translate-y-0.5 transition-all active:translate-y-0 hover:scale-101 active:scale-100 rounded">
          Subscribe
        </button>
      </form>
    </section>
  )
}

/* =========================
   FAQ
========================= */
export const FAQ = () => {
  const faqs = [
    {
      q: 'How can I enroll in a course?',
      a: 'Simply sign up and click enroll on your desired course.',
    },
    {
      q: 'Can I add my own course?',
      a: 'Yes, instructors can add, edit, or delete their courses.',
    },
    {
      q: 'Is AKMSkillVerse free?',
      a: 'Some courses are free, others are paid.',
    },
  ]

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="p-4 rounded-xl shadow">
            <h4 className="font-semibold">{item.q}</h4>
            <p className="text-gray-600 mt-2">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
