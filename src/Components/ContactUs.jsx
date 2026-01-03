import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

const ContactUs = () => {
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
          <form className=" backdrop-blur p-8 rounded-2xl shadow-lg space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
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
