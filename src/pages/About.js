import React from 'react'
import Navbar from '../components/Navbar'
import Github from '../icons/Github'
import Instagram from '../icons/Instagram'
import Linkedin from '../icons/Linkedin'
import imageProfile from '../img/profile1.png'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center text-center pt-10">
        <div className="border-profile border-2 rounded-full w-56 h-56">
          <img 
            src={imageProfile} 
            alt="profile1" 
            className="rounded-full self-center -mt-4"
          />
        </div>
        <div>
          <h1 className="font-bold font-poppins text-xl text-basic my-1 lg:text-3xl">Hello, my name is Rendy Artha Prawira</h1>
          <h2 className="font-bold font-poppins text-md text-basic my-1 lg:text-xl">Video Editor to be Developer</h2>
        </div>
        <div className="flex flex-row my-1">
          <div className="mr-2">
            <Github />
          </div>
          <div className="mx-2">
            <Instagram />
          </div>
          <div className="ml-2">
            <Linkedin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
