import React from 'react'
import exp from '../constants/exp'
function Experience() {
  return (
    <div className=' text-secondary px-[2.5rem] sm:px-[3rem] md:px-[5rem]
    pt-[5rem]'>
        <div className='w-full'>
            <h1 className=' text-4xl font-semibold mb-7'>Experience</h1>
            <div className='h-[1px] w-[full] bg-secondary mb-7'></div>
        </div>
        <div className='exp-container'>
            <div className='exp-content'>
                {exp.map((exp) => {
                    return (
                        <div className='exp-item ' key={exp.id}>
                            <h1 className='text-md font-semibold mb-1'>{exp.title}</h1>
                            <p className='text-wrap text-sm mb-3'>{exp.content}</p>
                            <div className='h-[1px] w-[full] bg-secondary mb-6'></div>
                        </div>
                    )
                })}
          </div>
        </div>
    </div>
  )
}

export default Experience