import React, { useState } from 'react'

const ListPortofolio = ({item}) => {
  const [readMore, setReadMore] = useState(true)
  const handleReadMore = item.description.slice(0, 100)

  return (
    <div 
      className="p-4 bg-content rounded flex flex-col my-2 w-full h-auto shadow-xl md:w-64 md:mx-6 lg:mx-5" 
    >
      <img 
        src={item.imagePortofolio} 
        alt="gambarporto"
        className="object-cover w-full rounded md:h-40"
      />
      <h1 className="text-content pt-2 font-poppins font-medium text-md mx-auto">{item.titlePortofolio}</h1>
      <div className="">
        <span className="mr-1 font-montserrat font-normal text-content text-sm">
          {readMore ? handleReadMore : item.description}
        </span>
        <button 
          onClick={() => setReadMore(!readMore)}
          className="focus:outline-none text-xs text-content"
        >
          {readMore ? '... Read More' : '... Read Less'}
        </button>
      </div>
      <a 
        href={item.linkDeploy}
        className="bg-button mt-3 hover:bg-white hover:text-button focus:outline-none w-full h-11 text-center rounded py-2 my-1 shadow-2xl font-poppins text-white text-base"
      >
        Demo Apps
      </a>
    </div>
  )
}

export default ListPortofolio
