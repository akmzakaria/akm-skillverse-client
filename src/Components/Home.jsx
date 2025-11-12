import React from 'react'
import Banner from './Banner'
import PopularCourses from './PopularCourses'
import { useLoaderData } from 'react-router'

const Home = () => {
  const data = useLoaderData()

  return (
    <div>
      <Banner></Banner>
      <PopularCourses data={data}></PopularCourses>
    </div>
  )
}

export default Home
