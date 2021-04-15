import React from 'react'
import Navbar from '../components/Navbar'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Blog = () => {
  const history = useHistory()
  const isLoggedIn = JSON.parse(localStorage.getItem("isLogin"))

  if(!isLoggedIn) {
    history.push("/")
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Blog - Rendy Artha</title>
        <meta name="description" content="blog"/>
      </Helmet>
      <Navbar />
      <div className="flex py-80 h-full">
        <h1 className="text-2xl font-poppins font-bold m-auto">Coming Soon...</h1>
      </div>
    </div>
  )
}

export default Blog
