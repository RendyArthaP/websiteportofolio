import React from 'react'
import { useHistory } from 'react-router-dom';
import imageProfile from '../img/profile1.png'
import Circle from '../ornaments/Circle';
import Dot from '../ornaments/Dot';
import Triangle from '../ornaments/Triangle/Triangle';
import Wave from '../ornaments/Wave/Wave';

const Home = () => {
  // document.addEventListener("mousemove", parallax);
  // function parallax(e) {
  //   document.querySelectorAll(".layer").forEach(layer => {
  //     const speed = layer.getAttribute("data-speed")

  //     const x = (window.innerWidth - e.pageX * speed) / 100
  //     const y = (window.innerHeight - e.pageY * speed) /100
      
  //     layer.style.transform = `translateX(${Math.floor(x)}px) translateY(${Math.floor(y)}px)`
  //   })
  // }
  const history = useHistory();

  const handleLogin = () => {
    history.push("/about")
  }

  return (
    <div>
      <div className="flex h-screen items-center">      
        <div className="flex flex-col items-center text-center w-full lg:flex-row-reverse lg:justify-around lg:px-16">
          <div className="border-profile border-2 rounded-full w-56 h-56">
            <img 
              src={imageProfile} 
              alt="profile1" 
              className="rounded-full self-center -mt-4"
            />
          </div>
          <div className="flex flex-col items-center px-2 md:px-0 lg:items-start">
            <h1 className="font-bold font-poppins text-2xl text-basic my-1 lg:text-4xl">What’s up, everyone?!</h1>
            <h2 className="font-bold font-poppins text-xl text-basic my-1 lg:text-3xl">I hope you guys enjoy my personal page.</h2>
            <h3 className="font-medium font-poppins text-lg text-basic my-1 lg:text-xl">I really appreciate it. Thank you! :D</h3>
            <button
              className="bg-button hover:bg-white hover:text-button hover:transf focus:outline-none w-28 h-11 text-center rounded py-2 my-1 shadow-2xl font-poppins text-white text-base"
              onClick={handleLogin}
            >
              Click me!
            </button>
          </div>
        </div>
      <div>
        <div className="layer" data-speed="-5">
          <Circle />
        </div>
        <div className="layer" data-speed="5">
          <Dot />
        </div>
        <div className="layer" data-speed="2">
          <Triangle />
        </div>
        <div className="layer" data-speed="6">
          <Wave />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
