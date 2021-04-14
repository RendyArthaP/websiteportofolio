import React, { useState } from 'react'

const ListPortofolio = ({item}) => {
  const [readMore, setReadMore] = useState(true)
  const handleReadMore = item.description.slice(0, 150)
  const handleLiveServer = () => {
    console.log(item.linkDeploy)
  }

  return (
    <div 
      className="p-4 bg-content rounded flex flex-col justify-between my-2 w-64 h-auto md:mr-14 lg:mr-2" 
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
        className="bg-button mx-auto w-full text-sm text-white font-montserrat p-1 rounded text-center mt-2"
      >
        Live Server
      </a>
    </div>
  )
}

export default ListPortofolio
