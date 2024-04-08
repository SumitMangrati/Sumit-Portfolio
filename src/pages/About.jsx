import React from 'react'
import Navbar from '../components/Navbar'
import AboutCont from '../components/AboutCont'
import Tech from '../components/Tech'
import Experience from '../components/Experience'


function About() {



  return (
    <div className='h-[235vh] w-[100vw] bg-primary'>
        < Navbar />
        < AboutCont />
        < Tech />
        < Experience />
    </div>
  )
}

export default About