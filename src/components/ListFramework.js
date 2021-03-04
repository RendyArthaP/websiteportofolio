import React from 'react'

const ListFramework = ({frameworkPrograms}) => {
  return (
    <div>
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
              <h1 
                className="ml-4 font-montserrat font-normal text-lg text-content"
              >
                {framework.nameFramework}
              </h1>
            </div>
            <div className="flex flex-col pt-2">
              {framework.descriptions.map((description, index) => (
                <div key={index}>
                  <span 
                    className="font-montserrat font-normal text-content text-xs"
                  >
                    {description}
                  </span>
                </div> 
              ))}
            </div>
          </li>
        ))}
        </ul>
    </div>
  )
}

export default ListFramework
