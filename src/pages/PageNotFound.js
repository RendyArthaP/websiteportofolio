import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="flex flex-col text-center justify-center h-screen">
      <h1 className="font-poppins text-6xl text-title">404</h1>
      <h2 className="font-poppins text-2xl text-basic font-medium">Page not found!</h2>
      <span className="font-poppins text-basic">
        Just back to our home! 
      </span>
      <Link 
          to="/"
          className="my-2 py-2 font-poppins text-white bg-button w-32 h-11 hover:bg-white hover:text-button focus:outline-none mx-auto rounded shadow-2xl text-base"
        > 
          Home
        </Link>
    </div>
  )
}

export default PageNotFound
