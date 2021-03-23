import React from 'react'

const ListLanguange = ({languangePrograms}) => {
  return (
    <div>
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
            {/* <div className="flex flex-col pt-2">
              {languange.descriptions.map((description, index) => (
                <div key={index}>
                  <span 
                    className="font-montserrat font-normal text-content text-xs"
                  >
                    {description}
                  </span>
                </div> 
              ))}
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListLanguange
