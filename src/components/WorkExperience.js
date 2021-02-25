import React from 'react'
import {workExperiences} from '../data/DataAbout';

const WorkExperience = () => {
  return (
    <div className="pt-4 w-full">
      <div className="bg-content h-12">
        <h1 className="font-poppins font-semibold text-xl text-content text-center pt-2 tracking-widest">Work Experience</h1>
      </div>
      <div className="bg-content mt-1">
        {workExperiences.map((work) => 
          <div className="flex flex-col p-3" key={work.id}>
            <h1 className="font-montserrat font-medium text-lg text-content">{work.titleJob}</h1>
            <span className="font-montserrat font-normal text-content text-sm">{work.nameCompany}</span>
            <span className="font-montserrat font-normal text-content text-sm">{work.howLong}</span>
        </div>
        )}
      </div>
    </div>
  )
}

export default WorkExperience
