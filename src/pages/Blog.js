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
      <h1>Blog</h1>
    </div>
  )
}

export default Blog
