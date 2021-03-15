import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Page not found!</h2>
      <span>
        Just back to our home! 
        <Link to="/about">Home</Link>
      </span>
    </div>
  )
}

export default PageNotFound
