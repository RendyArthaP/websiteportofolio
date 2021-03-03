import React from 'react'
import {workExperiences} from '../data/DataAbout';

const WorkExperience = () => {
  return (
    <div className="pt-4 mr-4 w-full md:w-1/2">
      <div className="bg-content h-12">
        <h1 className="font-poppins font-semibold text-xl text-content text-center pt-2 tracking-widest">Work Experience</h1>
      </div>
      <div className="bg-content mt-1 md:mb-4">
        {workExperiences.map((work) => 
          <ul 
            className="flex flex-col p-3" 
            key={work.id}
          >
            <li>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h1 className="font-montserrat font-bold text-lg text-content">{work.titleJob}</h1>
                <span className="font-montserrat font-normal text-content text-sm">{work.howLong}</span>
              </div>
              <span className="font-montserrat font-normal text-content text-sm">{work.nameCompany}</span>
              <p className="font-montserrat font-light text-content text-xs py-2">{work.description}</p>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default WorkExperience
