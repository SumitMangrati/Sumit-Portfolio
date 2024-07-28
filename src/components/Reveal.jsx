import React, { useState } from "react";
import { MouseEvent, MouseEventHandler } from "react";
import lion from "../assets/1.jpg";
//import dog from "../assets/2.PNG"
import cat from "../assets/3.png";
import tiger from "../assets/4.png";
import { Opacity } from "@material-ui/icons";
import "../styles/Reveal.scss";
import { motion, useSpring } from "framer-motion";

function Reveal() {
  const [img, setImg] = useState({
    src: "",
    alt: "",
    opacity: 0,
  });

  const list = [
    {
      img: lion,
      label: "Lion",
    },
    // {
    //     img:dog,
    //     label: "Dog",
    // },
    {
      img: cat,
      label: "Cat",
    },
    {
      img: tiger,
      label: "Tiger",
    },
  ];

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
    <>
      <section onMouseMove={handleMove} className="image_reveal">
        <ul>
          {list.map((item) => {
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
              >
                {item.label}
              </li>
            );
          })}
        </ul>

        <motion.img
          src={img.src}
          alt={img.alt}
          className="hovered_image"
          style={{
            y: imagePos.y,
            x: imagePos.x,
            opacity: img.opacity
          }}
        />
      </section>
    </>
  );
}

export default Reveal;
