import React, { useEffect, useState } from "react";
import "../styles/flow.scss";
import Button from "../components/Button";
import { heading , subheading } from "../constants/hero";
function Flow() {
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    const interBubble = document.querySelector(".interactive");

    function move() {
      // setCurX += (tgX - curX) / 20;
      // setCurY += (tgY - curY) / 20;
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    const handleMouseMovement = (e) => {
      setTgX(e.clientX);
      setTgY(e.clientY);
    };
    console.log(tgX, tgY);
    document.addEventListener("mousemove", handleMouseMovement);
    move();
  }, [curX, curY, tgX, tgY]);

  return (
    <div className="h-[100vh] w-[100vw] p-5">
      <div className="h-full w-full ">
        <div class="text-container font-rubik font-semibold">
          <div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl">{heading}</h1>
            <p className=" text-sm md:text-md font-thin">{subheading}</p>
          </div>
          <div className="absolute bottom-20">
            < Button />
          </div>
          </div>

        <div className="gradient-bg rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
            <div className="interactive"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flow;
