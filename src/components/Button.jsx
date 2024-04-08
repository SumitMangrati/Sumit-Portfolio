import React, { useRef, useEffect } from "react";
import { gsap, Elastic } from "gsap";
import "../styles/button.css";

const MagneticButton = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    function handleMouseLeave() {
      gsap.to(".button-circle, .button-text", {
        duration: 2,
        scale: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut.config(2, 0.3),
      });
    }

    function handleMouseMove(e) {
      parallaxIt(e, ".button-circle", 60);
      parallaxIt(e, ".button-text", 50);
    }

    function parallaxIt(e, target, movement) {
      const boundingRect = wrapper.getBoundingClientRect();
      const relX = e.pageX - boundingRect.left;
      const relY = e.pageY - boundingRect.top;

      gsap.to(target, {
        duration: 0.3,
        x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
        y: ((relY - boundingRect.height / 2) / boundingRect.width) * movement,
      });
    }

    wrapper.addEventListener("mouseleave", handleMouseLeave);
    wrapper.addEventListener("mousemove", handleMouseMove);

    return () => {
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
      wrapper.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="button-circle w-[100px] h-[100px] border-[2px] border-secondary rounded-full flex items-center justify-center overflow-hidden"
      ref={wrapperRef}
    > 
        {/* <img className="button-arrow h-[44px] " src={arrow} alt="" /> */}
        {/* <HiArrowNarrowDown className=" scale-[3]"/> */}
        <p className=" btn-txt font-rubik uppercase font-semibold z-[2]">start</p>
    </div>
  );
};

export default MagneticButton;
