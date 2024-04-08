import React from "react";
import {
  FaFigma,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaAws,
} from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import "../styles/about.scss";
function Tech() {
  return (
    <div
      className=" text-secondary flex flex-col items-center justify-center px-[2.5rem] sm:px-[3rem] md:px-[5rem]
  pt-[8rem] "
    >
      <div className="mb-3">
        <RxCross2 />
      </div>
      <div className="w-[0.5px] h-[17vh] bg-secondary mb-10"></div>
      <div className=" text-sm opacity-65 mb-7">
        <p>Technologies I work with</p>
      </div>
      <div className="flex-col ">
        <div className="1 flex justify-around gap-6">
          <div className="icon-container">
            <FaFigma className="tech"/>
            <p>figma</p>
          </div>
          <div className="icon-container">
            <FaReact className="tech"/>
            <p>ReactJs</p>
          </div>
        </div>
        <div className="2 flex justify-around gap-6">
          <div className="icon-container">
            <FaNodeJs className="tech" />
            <p>NodeJs</p>
          </div>
          <div className="icon-container">
            <FaDocker className="tech"/>
            <p>Docker</p>
          </div>
          <div className="icon-container">
            <FaJava className="tech"/>
            <p>Java</p>
          </div>
        </div>
        <div className="3 flex justify-around gap-6">
          <div className="icon-container">
            <FaGitAlt className="tech"/>
            <p>Git</p>
          </div>
          <div className="icon-container">
            <FaAws className="tech"/>
            <p>AWS</p>
          </div>
        </div>
      </div>
      <div className="w-[0.5px] h-[17vh] bg-secondary mt-12"></div>
      <div className="mt-3">
        <RxCross2 />
      </div>
    </div>
  );
}

export default Tech;
