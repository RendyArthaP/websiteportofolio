import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import Github from '../assets/icons/Github'
import Instagram from '../assets/icons/Instagram'
import Linkedin from '../assets/icons/Linkedin'
import imageProfile from '../assets/img/profile1.png'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import RendyCV from '../img/cv/rendycv.pdf'

const About = () => {
  const history = useHistory()
  const isLoggedIn = JSON.parse(localStorage.getItem("isLogin"))

  useEffect(() => {
    if(!isLoggedIn) {
      history.push("/")
    }
  }, [])

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>About - Rendy Artha</title>
        <meta name="description" content="about"/>
      </Helmet>
      <Navbar />
      <div className="flex flex-col items-center text-center pt-10 lg:flex-row lg:justify-between px-4 md:px-6 lg:px-16 xl:px-32 2xl:px-64">
        <div className="2xl:pt-6">
          <div className="border-profile border-2 rounded-full w-56 h-56">
            <img 
              src={imageProfile} 
              alt="profile1" 
              className="rounded-full self-center -mt-4"
            />
          </div>
          <a 
            href={RendyCV} 
            download="cv-rendy"
          >
            <button 
              className="bg-button mt-3 hover:bg-white hover:text-button focus:outline-none w-32 h-11 text-center rounded py-2 my-1 shadow-2xl font-poppins text-white text-base"
            >
              Download CV
            </button>
          </a>
        </div>
        <div className="flex flex-col lg:w-8/12 xl:w-9/12">
          <div className="mx-4 lg:text-left">
            <h1 
              className="font-bold font-poppins text-xl text-basic my-1 lg:text-3xl lg:w-80 xl:w-full"
            >
              Hello, i am Rendy Artha Prawira
            </h1>
            <h2 
              className="font-bold font-poppins text-md text-title my-1 lg:text-xl"
            >
              Video Editor to be Developer
            </h2>
          </div>
          <div className="flex flex-row my-1 self-center lg:self-start lg:mx-4">
            <div className="mr-2 transform hover:scale-150 transition duration-100">
              <a href="https://github.com/RendyArthaP">
                <Github />
              </a>
            </div>
            <div className="mx-2 transform hover:scale-150 transition duration-100">
              <a href="https://instagram.com/rendyartha">
                <Instagram />
              </a>
            </div>
            <div className="ml-2 transform hover:scale-150 transition duration-100">
              <a href="https://www.linkedin.com/in/rendyarthap/">
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="lg:px-4 flex flex-col">
            <h2 
              className="font-bold font-poppins text-md text-title my-1 lg:text-xl border-b border-basic pt-4 lg:text-left"
            >
              About Me
            </h2>
            <span className="text-left font-montserrat font-light text-base">
              Glad to know that you guys clicking my website, and i just wanna say thank you for 
              appreciate it! As you see my profile, i was graduate at 2016 as Communication Science 
              (broadcasting). Short story, i learn my first programming at January 2020. Coding teach 
              me a lot how to think, and really open my mind to solve the problem. At September 2020, 
              i got my first job as <b className="font-semibold">front end web developer</b>, and at Januari 2021 i 
              decided to quit my dream job, and going bootcamp with Impact Byte to improve my skills and i really enjoy it.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-4 md:px-6 lg:px-16 xl:px-32 2xl:px-64">
        <WorkExperience />
        <Skills />
      </div>
    </div>
  )
}

export default About
