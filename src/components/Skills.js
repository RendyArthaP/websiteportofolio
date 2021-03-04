import React from 'react'
import { languangePrograms, frameworkPrograms } from '../data/DataAbout';

const Skills = () => {
  return (
    <div className="py-4 w-full md:w-1/2">
      <div className="bg-content h-12 rounded">
        <h1 className="font-poppins font-semibold text-xl text-content text-center pt-2 tracking-widest">Skills</h1>
      </div>
      <div className="bg-content mt-1 rounded md:mb-4" style={{height:"430px"}}>
        <h1 className="font-montserrat font-bold text-lg text-content p-3 pb-0">
          Languange Programming
        </h1>
        <ul>
          {languangePrograms.map((languange) => (
            <li
              key={languange.id}
              className="flex flex-col py-2 px-3"
            >
              <div className="flex flex-row items-center">
                <img 
                  src={languange.image} 
                  alt="js" 
                  className="w-10 h-10"
                />
                <h1 className="ml-4 font-montserrat font-normal text-lg text-content">{languange.nameLanguange}</h1>
              </div>
            </li>
          ))}
        </ul>
        
        <h1 className="font-montserrat font-bold text-lg text-content px-3">
          Framework
        </h1>
        <ul>
          {frameworkPrograms.map((framework) => (
            <li
              key={framework.id}
              className="flex flex-col py-2 px-3"
            >
              <div className="flex flex-row items-center">
                <img 
                  src={framework.image} 
                  alt="react" 
                  className="w-10 h-10"
                />
                <h1 className="ml-4 font-montserrat font-normal text-lg text-content">{framework.nameFramework}</h1>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Skills
