import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Hamburger from '../icons/Hamburger';

const Navbar = () => {
  const [navbarMobile, setNavbarMobile] = useState(false)

  const handleNavbarMobile = () => {
    setNavbarMobile(!navbarMobile)
  }

  return (
    <div className ="flex flex-row justify-between items-center bg-navbar h-14 px-4 md:px-6 lg:px-8 xl:px-10">
      <Link to="/">
        <h1 className="font-bold font-poppins text-xl text-content">RENDYARTHA</h1>
      </Link>
      <ul className="hidden md:flex md:flex-row">
        <li className="mx-4 font-medium font-poppins text-base text-content">
          <Link to="/about">
            About
          </Link>
        </li>
        <li className="mx-4 font-medium font-poppins text-base text-content">
          <Link to="/portofolio">
            Portofolio
          </Link>
        </li>
        <li className="ml-4 font-medium font-poppins text-base text-content">
          <Link to="/blog">
            Blog
          </Link>
        </li>
      </ul>
      <div onClick={handleNavbarMobile} className="flex md:hidden">
        <Hamburger />
      </div>
      {navbarMobile && (
        <ul className="flex flex-col absolute bg-navbar w-full left-0 top-14">
        <li className="mx-4 py-4 font-medium font-poppins text-base text-content">
          <Link to="/about">
            About
          </Link>
        </li>
        <li className="mx-4 py-4 font-medium font-poppins text-base text-content">
          <Link to="/portofolio">
            Portofolio
          </Link>
        </li>
        <li className="ml-4 py-4 font-medium font-poppins text-base text-content">
          <Link to="/blog">
            Blog
          </Link>
        </li>
      </ul>
      )}
    </div>
  )
}

export default Navbar
