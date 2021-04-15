import React from 'react'
import { languangePrograms, frameworkPrograms } from '../data/DataAbout';
import ListFramework from './ListFramework';
import ListLanguange from './ListLanguange';

const Skills = () => {
  return (
    <div className="py-4 w-full md:w-1/2">
      <div className="bg-content h-12 rounded">
        <h1 
          className="font-poppins font-semibold text-xl text-content text-center pt-2 tracking-widest"
        >
          Skills
        </h1>
      </div>
      <div 
        className="bg-content mt-1 rounded md:mb-4" 
        style={{height:"430px", maxHeight:"430px"}}
      >
        <h1 className="font-montserrat font-bold text-lg text-content p-3 pb-0">
          Languange Programming
        </h1>
        <ListLanguange languangePrograms={languangePrograms}/>
        <h1 className="font-montserrat font-bold text-lg text-content px-3">
          Framework
        </h1>
        <ListFramework frameworkPrograms={frameworkPrograms}/>
      </div>
    </div>
  )
}

export default Skills
