import React from 'react'
import Reveal from '../components/Reveal'
import Navbar from '../components/Navbar'
import ProjectList from '../components/ProjectList'

function Projects() {
  return (
    <div className='w-[100vw] min-h-[100vh] bg-primary'>
      <Navbar />
      {/* <Reveal /> */}
      <ProjectList />
    </div>
  )
}

export default Projects