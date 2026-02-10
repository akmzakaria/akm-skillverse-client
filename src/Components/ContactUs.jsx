import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { useState } from 'react'
import toast from 'react-hot-toast'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSend = (e) => {
    e.preventDefault()
    // toast.success('Message sent successfully! We will get back to you soon.')

    toast.success('Message sent successfully!', {
      duration: 3000,
      position: 'top-center',
      style: {
        background: '#10B981',
        color: '#fff',
        fontWeight: '600',
        borderRadius: '12px',
        padding: '16px',
      },
    })

    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="py-20 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            Get in <span className="text-secondary">Touch</span>
          </h2>
          <p className=" max-w-2xl mx-auto">
            Questions, feedback, or support? We’d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MdEmail className="text-3xl text-secondary mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="">support@akmskillverse.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdPhone className="text-3xl text-secondary mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="">+880 1XXX-XXXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdLocationOn className="text-3xl text-secondary mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="">Dhaka, Bangladesh</p>
              </div>
            </div>

            <p className="">Our team usually responds within 24 hours.</p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSend}
            className=" backdrop-blur p-8 rounded-2xl shadow-lg space-y-5"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-secondary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
