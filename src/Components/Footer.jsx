import { Link } from 'react-router'
import { motion } from 'framer-motion' // eslint-disable-line
import './Footer.css'
import { FaFacebook } from 'react-icons/fa6'
import { BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'

const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: ['About Us', 'Our Mission', 'Contact Sales'],
    },
    {
      title: 'Services',
      links: ['Courses & Services', 'Customer Stories', 'Buy Courses'],
    },
    {
      title: 'Information',
      links: ['Privacy Policy', 'Terms & Conditions', 'Join Us'],
    },
  ]

  return (
    <footer className="bg-base-300 mt-20 max-w-7xl mx-auto rounded-2xl mb-10">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img className="w-8 md:w-10" src="/logo5.png" alt="Logo" />
              <h2 className="font-bold text-lg md:text-xl">AKM SkillVerse</h2>
            </div>
            <p className="text-sm text-base-content/70 leading-relaxed mb-4">
              A modern online learning platform designed to help learners explore, develop, and
              master practical skills for the future.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="btn btn-circle btn-sm btn-ghost hover:btn-secondary transition-colors"
              >
                <BsTwitterX className="text-lg" />
              </a>
              <a
                href="#"
                className="btn btn-circle btn-sm btn-ghost hover:btn-secondary transition-colors"
              >
                <BsLinkedin className="text-lg" />
              </a>
              <a
                href="#"
                className="btn btn-circle btn-sm btn-ghost hover:btn-secondary transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="btn btn-circle btn-sm btn-ghost hover:btn-secondary transition-colors"
              >
                <CgMail className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-base md:text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to="#"
                      className="text-sm text-base-content/70 hover:text-secondary transition-colors inline-block"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-content/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-base-content/60">
              © 2025 AKM SkillVerse. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-base-content/60">
              <Link to="#" className="hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-secondary transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-secondary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
