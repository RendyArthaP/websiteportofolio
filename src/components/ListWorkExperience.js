import React from 'react'

const ListWorkExperience = ({workExperiences}) => {
  return (
    <div>
      <ul>  
          {workExperiences.map((work) => (      
            <li
              className="flex flex-col py-2 px-3" 
              key={work.id}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h1 className="font-montserrat font-bold text-lg text-content">{work.titleJob}</h1>
                <span className="font-montserrat font-normal text-content text-sm">{work.howLong}</span>
              </div>
              <span className="font-montserrat font-normal text-content text-sm">{work.nameCompany}</span>
              <p className="font-montserrat font-normal text-content text-xs py-2">{work.description}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default ListWorkExperience
