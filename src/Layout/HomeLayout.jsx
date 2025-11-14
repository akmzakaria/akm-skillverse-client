import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../Components/Footer'
import Loading from '../Pages/Loading'

const HomeLayout = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading></Loading>
  }

  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }

  return (
    <div>
      <title>AKM SkillVerse - Home</title>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default HomeLayout
