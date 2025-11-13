import React from 'react'
import { Link } from 'react-router'

const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <title>Error404</title>
      <p className="text-xl">Error 404</p>
      <p>Page Not Found!</p>
      <Link to={-1} className="btn btn-outline btn-secondary rounded-full mt-5">
        Go Back
      </Link>
    </div>
  )
}

export default Error404
