import React from 'react'
import Navbar from '../components/Navbar'
import imageProfile from '../img/profile1.png'

const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="border-profile border-2 rounded-full w-56 h-56">
          <img 
            src={imageProfile} 
            alt="profile1" 
            className="rounded-full self-center -mt-4"
          />
        </div>
        <h1 className="font-bold font-poppins text-xl text-basic my-1 lg:text-3xl">Hello, my name is Rendy Artha Prawira</h1>
        <h2 className="font-bold font-poppins text-md text-basic my-1 lg:text-xl">Video Editor to be Developer</h2>
      </div>
    </div>
  )
}

export default About
