import React from "react";
import { aboutPara } from "../constants/about";
import Socials from "./Socials";
import "../styles/about.scss";
function AboutCont() {
  return (
    <div className="container text-secondary w-[100vw] font-rubik">
      <div
        className="h-full w-[100vw] wrapper flex flex-col
        px-[2.5rem] sm:px-[3rem] md:px-[5rem]
        pt-[8rem]"
      >
        <div className="heading mb-7">
          <h1 className="text-4xl font-semibold">About</h1>
        </div>
        <div className="line w-full h-[1px] bg-secondary mb-7"></div>
        <div className="h-full w-full content flex flex-col-reverse justify-end sm:flex-row sm:justify-between">
          <div className="email-section">
            <div>Let's Connect</div>
            <div
              className="copy-section z-[100]"
              onClick={() => {
                navigator.clipboard.writeText("sumitmangrati32@gmail.com");
              }}
            >
              <span className="underline">Email</span>
            </div>
          </div>
          <div className="socials mb-6 sm:mb-0">
            <Socials />
          </div>
          <div className="description text-wrap sm:w-[60%] mb-6">
            <p>
              I'm a passionate{" "}
              <span className=" font-semibold">second-year</span> college
              student diving deep into the world of software development. My
              interests are broad, ranging from building user-facing web
              applications to the intricate world of cloud engineering and
              DevOps. <br />
              <span className="font-semibold">Open source</span> is a big driver
              for me. I believe in the power of collaboration and learning from
              the best. I'm actively seeking opportunities to contribute to
              existing projects and create my own open-source solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCont;
