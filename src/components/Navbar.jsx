import React , { useState } from "react";
import '../styles/navbar.scss'
import { Link } from "react-router-dom";
function Navbar() {
  
  const [ homeActive , setHomeActive ] = useState(true);
  const [ aboutActive , setAboutActive ] = useState(false);
  const [ projectsActive , setProjectsActive ] = useState(false);
  const handleAbout = () => {
    setHomeActive(false);
    setAboutActive(true);
    setProjectsActive(false);
  }
  const handleProjects = () => {
    setHomeActive(false);
    setAboutActive(false);
    setProjectsActive(true);
  }
  const handleHome = () => {
    setHomeActive(true);
    setAboutActive(false);
    setProjectsActive(false);
  }

  return (
    <div className="fixed w-full z-[200] text-secondary flex px-[2.5rem] sm:px-[3rem] md:px-[5rem]
     pt-[3.5rem] items-center font-satoshi">
      <div className="flex items-center justify-between w-full">
        <Link to ='/'>
        <div className="cursor-pointer hover:opacity-85">Sumit</div>
        </Link>
        <div className="flex gap-[2rem] sm:gap-[4rem]">
          <Link to='/about'>
            <div className="hover-underline-animation cursor-pointer"
            >About</div>
            </Link>
            <Link to='/project'>
            <div className="hover-underline-animation cursor-pointer">Projects</div>
              </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
