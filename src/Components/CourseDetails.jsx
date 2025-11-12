import React, { useState } from 'react'
import { BiSend } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa6'
import { MdEventAvailable, MdOutlinePriceCheck } from 'react-icons/md'
import { Link, useLoaderData, useParams } from 'react-router'

const CourseDetails = () => {
  const data = useLoaderData()

  const { id } = useParams()
  //   console.log(id)

  const fltData = data.find((d) => d._id === id)

  const [success, setSuccess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess('Successfully Submitted!')
    e.target.reset()
    setTimeout(() => setSuccess(''), 5000)
  }

  return (
    <div>
      <div className={''}>
        <main>
          <div className="min-h-screen pb-5">
            <div className="max-w-5xl mx-auto">
              <title>AKM SkillVerse - Course Details</title>
              {/* toy details */}
              <div className="flex md:flex-row flex-col items-center md:gap-10 gap-5 p-5 md:p-15">
                <img
                  className="rounded-lg object-cover h-60 w-60 md:h-80 md:w-80 shadow-lg"
                  src={fltData.image_url}
                />

                <div className="flex flex-col gap-3 md:gap-5">
                  <h3 className="font-bold text-center md:text-start text-2xl md:text-3xl">
                    {fltData.title}
                  </h3>
                  <p className="text-sm text-center md:text-left font-bold">
                    Category: <span className="font-medium text-secondary">{fltData.category}</span>
                  </p>

                  <div className="flex  gap-6 md:gap-10 mt-2">
                    <div className="flex flex-col md:gap-2">
                      <div className="flex gap-1 items-center text-secondary">
                        <MdOutlinePriceCheck className="text-4xl" />
                        <p className="text-sm">Price</p>
                      </div>
                      <h1 className="font-extrabold md:text-3xl">{fltData.price} $</h1>
                    </div>
                  </div>

                  <p className="font-bold">
                    Duration: <span className="text-secondary font-medium">{fltData.duration}</span>
                  </p>

                  <p className=" mt-3">{fltData.description}</p>
                </div>
              </div>

              {/* form  */}
              <div className="flex justify-center px-2 mt-10">
                <div className="card border w-full max-w-sm shadow-2xl rounded-2xl pt-5">
                  <form onSubmit={handleSubmit} className="card-body">
                    <fieldset className="fieldset space-y-3">
                      <h2 className="text-xl font-semibold text-center mb-2">Try It Out</h2>

                      {/* name */}
                      <label className=" font-medium">Name</label>
                      <input
                        name="name"
                        type="text"
                        className="w-full px-4 py-3 bg-black/30 border border-secondary rounded-lg  placeholder-gray-400 focus:ring-2 focus:ring-primary outline-none"
                        placeholder="Enter your name"
                        required
                      />

                      {/* email */}
                      <label className=" font-medium">Email</label>
                      <input
                        name="email"
                        type="email"
                        className="w-full px-4 py-3 bg-black/30 border border-secondary rounded-lg  placeholder-gray-400 focus:ring-2 focus:ring-primary outline-none"
                        placeholder="Enter your email"
                        required
                      />

                      {/* success message */}
                      {success && (
                        <div className="text-green-500 flex gap-1 text-center font-medium mt-2 transition-all">
                          <BiSend />
                          {success}
                        </div>
                      )}

                      <div className="flex justify-center">
                        <button type="submit" className="btn btn-secondary rounded-full mt-4 w-fit">
                          Try Now
                        </button>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>

              {/* back button */}
              <div className="text-center mt-6">
                <p className="text-gray-400">Or</p>
                <Link to={-1} className="btn btn-outline btn-secondary rounded-full mt-2">
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default CourseDetails
