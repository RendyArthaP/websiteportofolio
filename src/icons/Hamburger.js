import React from 'react'

const Hamburger = () => {
  return (
    <div className="flex md:hidden cursor-pointer">
      <svg viewBox="0 0 100 80" width="40" height="40" fill="#BFC0C0">
        <rect width="80" height="8"></rect>
        <rect y="30" width="80" height="8"></rect>
        <rect y="60" width="80" height="8"></rect>
      </svg>
    </div>
  )
}

export default Hamburger
