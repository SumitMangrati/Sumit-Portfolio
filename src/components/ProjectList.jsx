import React, { useState } from "react";
import Projects from "../constants/Projects";
import { motion, useSpring } from "framer-motion";
function ProjectList() {
  const [img, setImg] = useState({
    src: "",
    alt: "",
    opacity: 0,
  });

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const handleMove = (e) => {
    imagePos.x.set(e.clientX);
    imagePos.y.set(e.clientY);
  };

  return (
    <div className="">
      <div
        className="container bg-primary h-full w-full px-[2.5rem] sm:px-[3rem] md:px-[5rem]
        pt-[8rem]"
      >
        <div className="title text-secondary flex justify-between align-middle border-b-[1px] pb-4 opacity-70">
          <h2>Project</h2>
          <h2>Type</h2>
        </div>

        <div onMouseMove={handleMove} className="image_reveal w-full overflow-clip">
          <ul className="w-full border-none">
            {Projects.map((item) => {
              return (
                <li
                  key={item.label}
                  onMouseEnter={() => {
                    setImg({
                      src: item.img,
                      alt: item.label,
                      opacity: 1,
                    });
                  }}
                  onMouseLeave={() => {
                    setImg({
                      src: "",
                      alt: "",
                      opacity: 0,
                    });
                  }}
                  className="flex align-middle justify-between
                  w-full text-sm"
                >
                  <p>{item.label}</p>
                  <p>{item.type}</p>
                </li>
              );
            })}
            <div></div>
          </ul>

          <motion.img
            src={img.src}
            alt={img.alt}
            className="hovered_image
            absolute left-[5%] top-0"
            style={{
              y: imagePos.y,
              x: imagePos.x,
              opacity: img.opacity,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
