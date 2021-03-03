import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import Hamburger from '../icons/Hamburger';

const Navbar = () => {
  const [navbarMobile, setNavbarMobile] = useState(false)

  const handleNavbarMobile = () => {
    setNavbarMobile(!navbarMobile)
  }

  const location = useLocation();

  const aboutActive = () => {
    if(location.pathname === '/about') {
      return "mx-4 font-semibold font-poppins border-b border-content text-base text-content"
    } else {
      return "mx-4 font-medium font-poppins text-base text-content"
    }
  }

  const portofolioActive = () => {
    if(location.pathname === '/portofolio') {
      return "mx-4 font-semibold font-poppins border-b border-content text-base text-content"
    } else {
      return "mx-4 font-medium font-poppins text-base text-content"
    }
  }

  const blogActive = () => {
    if(location.pathname === '/blog') {
      return "ml-4 font-semibold font-poppins border-b border-content text-base text-content"
    } else {
      return "ml-4 font-medium font-poppins text-base text-content"
    }
  }

  return (
    <div className ="flex sticky top-0 flex-row justify-between items-center bg-navbar h-14 px-4 md:px-6 lg:px-16 xl:px-20 2xl:px-40">
      <Link to="/about">
        <h1 className="font-bold font-poppins text-xl text-content">RENDYARTHA</h1>
      </Link>
      <ul className="hidden md:flex md:flex-row">
        <li className={aboutActive()}>
          <Link to="/about">
            About
          </Link>
        </li>
        <li className={portofolioActive()}>
          <Link to="/portofolio">
            Portofolio
          </Link>
        </li>
        <li className={blogActive()}>
          <Link to="/blog">
            Blog
          </Link>
        </li>
      </ul>
      <div onClick={handleNavbarMobile} className="flex md:hidden">
        <Hamburger />
      </div>
      {navbarMobile && (
        <ul className="flex flex-col absolute bg-navbar w-full left-0 top-14 z-10 pb-6 md:hidden">
          <li className="mx-4 pt-4 pb-2 font-medium font-poppins text-base text-content border-b border-content">
            <Link to="/about">
              About
            </Link>
          </li>
          <li className="mx-4 pt-4 pb-2 font-medium font-poppins text-base text-content border-b border-content">
            <Link to="/portofolio">
              Portofolio
            </Link>
          </li>
          <li className="mx-4 pt-4 pb-2 font-medium font-poppins text-base text-content border-b border-content">
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
