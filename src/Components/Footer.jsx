import React from 'react'
import { Link } from 'react-router'
import './Footer.css'
import { FaFacebook } from 'react-icons/fa6'
import { BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'

const Footer = () => {
  return (
    <div className="bg-base-300 mt-10">
      <div className="flex md:flex-row flex-col md:justify-around text-center max-w-[1400px] mx-auto gap-8 py-10">
        <div className="flex-2 flex-col">
          <div className="flex items-center gap-1 justify-center mb-3">
            <img className="w-6 md:w-8" src="/logo5.png" alt="" />
            <h2 className="font-bold ">AKM SkillVerse</h2>
          </div>

          <p className="px-10 text-sm md:text-[1rem] md:px-0">
            AKM SkillVerse — a modern online learning platform designed to help learners explore,
            develop, and master practical skills for the future. With interactive courses, expert
            guidance, and hands-on learning experiences, SkillVerse empowers you to turn knowledge
            into real-world success.
          </p>
        </div>

        <div className="flex-1 flex-col text-sm md:text-[1rem]">
          <h2 className="font-bold mb-3 ">Company</h2>

          <Link>
            <p className="mb-2">About Us</p>
          </Link>
          <Link>
            <p className="mb-2">Our Mission</p>
          </Link>
          <Link>
            <p>Contact Saled</p>
          </Link>
        </div>

        <div className="flex-1 flex-col text-sm md:text-[1rem]">
          <h2 className="font-bold mb-3 ">Services</h2>

          <Link>
            <p className="mb-2">Courses & Services</p>
          </Link>
          <Link>
            <p className="mb-2">Customer Stories</p>
          </Link>
          <Link>
            <p>Buy Courses</p>
          </Link>
        </div>

        <div className="flex-1 flex-col text-sm md:text-[1rem]">
          <h2 className="font-bold mb-3 ">Information</h2>

          <Link>
            <p className="mb-2">Privacy Policy</p>
          </Link>
          <Link>
            <p className="mb-2">Terms & Conditions</p>
          </Link>
          <Link>
            <p>Join Us</p>
          </Link>
        </div>

        <div className="flex-1 flex-col text-sm md:text-[1rem]">
          <h2 className="font-bold mb-3 ">Social Links</h2>

          <Link>
            <div className="flex items-center justify-center gap-2 mb-2">
              <BsTwitterX />
              <p>x-twitter</p>
            </div>
          </Link>
          <Link>
            <div className="flex items-center justify-center gap-2 mb-2">
              <BsLinkedin></BsLinkedin>
              <p>LinkedIn</p>
            </div>
          </Link>
          <Link>
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaFacebook></FaFacebook>
              <p>FaceBook</p>
            </div>
          </Link>
          <Link>
            <div className="flex items-center justify-center gap-2 mb-2">
              <p className="text-xl">
                <CgMail></CgMail>
              </p>
              <p>app.support@gmail.com</p>
            </div>
          </Link>
        </div>
      </div>
      <hr className="border-gray-600 max-w-[1400px] mx-auto" />

      <footer className="p-5 text-xs md:text-sm text-center">
        © 2025 AKM SkillVerse. All rights reserved.
      </footer>
    </div>
  )
}

export default Footer
