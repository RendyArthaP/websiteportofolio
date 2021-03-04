import React from 'react'
import {workExperiences} from '../data/DataAbout';
import ListWorkExperience from './ListWorkExperience';

const WorkExperience = () => {
  return (
    <div className="pt-4 mr-4 w-full md:w-1/2">
      <div className="bg-content h-12 rounded">
        <h1 
          className="font-poppins font-semibold text-xl text-content text-center pt-2 tracking-widest"
        >
          Work Experience
        </h1>
      </div>
      <div 
        className="bg-content mt-1 rounded h-auto md:mb-4 overflow-y-scroll" 
        style={{height:"430px"}}
      >
        <ListWorkExperience workExperiences={workExperiences}/>
      </div>
    </div>
  )
}

export default WorkExperience
