import React from 'react'

function AboutHooks({
     hookNumber,
     hookName,
     aboutHook,
     additionalInformation
}
) {
  return (
    <div className='p-11'>
        <h1 className='py-5'>
          {hookNumber}.) 
          <span className='underline hover:shadow hover:shadow-black hover:cursor-pointer text-xl'> {hookName} 

          </span>
          </h1>
        <p className='px-5'> {aboutHook} </p>
        <p className='px-5'> </p>
             <h2 className='underline p-4'>Addtional Information : </h2>{additionalInformation}
             
    </div>
  )
}

export default AboutHooks