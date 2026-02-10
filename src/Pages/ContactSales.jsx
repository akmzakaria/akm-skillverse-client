import { useState } from 'react'
import toast from 'react-hot-toast'

const ContactSales = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Thank you! Our sales team will contact you soon.')
    setFormData({ name: '', email: '', company: '', phone: '', message: '' })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Contact Sales</h1>
      <p className="text-gray-600 mb-8">
        Interested in enterprise solutions or bulk course purchases? Get in touch with our sales
        team.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Custom learning paths for your organization</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Dedicated account manager</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Volume discounts available</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Advanced analytics and reporting</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Priority support</span>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-secondary w-full">
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactSales
