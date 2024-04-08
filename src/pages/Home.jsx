import React from 'react'
import Flow from '../components/Flow'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className='h-[100vh] w-[100vw] bg-primary'>
        < Navbar />
        < Flow />
    </div>
  )
}

export default Home