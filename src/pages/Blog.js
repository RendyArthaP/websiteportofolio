import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { UserContext } from '../context/UserContext'
import { useHistory } from 'react-router-dom'

const Blog = () => {
  const history = useHistory()
  const { isLogin } = useContext(UserContext)

  useEffect(() => {
    if(isLogin === false) {
      history.push("/")
    }
  }, [])

  return (
    <div>
      <Navbar />
      <h1>Blog</h1>
    </div>
  )
}

export default Blog
