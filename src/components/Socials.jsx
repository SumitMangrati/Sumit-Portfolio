import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import "../styles/about.scss";
import Tooltip from "@mui/material/Tooltip";

function Socials() {
  const newTab = (URL) => {
    window.open(URL);
  };

  return (
    <div className="flex flex-row sm:flex-col gap-4">
      {/* <Tooltip title="Github" placement='top'> */}
      <div>
        <AiFillGithub
          className="icons"
          onClick={() => newTab("https://www.github.com/SumitMangrati")}
        />
      </div>
      {/* </Tooltip> */}
      <div>
        <AiFillLinkedin
          className="icons"
          onClick={() =>
            newTab("https://www.linkedin.com/in/sumit-mangrati-a83545250")
          }
        />
      </div>
      <div>
        <AiFillInstagram
          className="icons"
          onClick={() => newTab("https://www.instagram.com/_zx.shjwe_/")}
        />
      </div>
    </div>
  );
}

export default Socials;
