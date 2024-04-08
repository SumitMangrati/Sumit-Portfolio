import React, { useEffect } from "react";
import '../styles/circleText.css'
function CircleText() {
    useEffect (()=> {
        const text = document.querySelector('.text p');
        text.innerHTML = text.innerText.split('').map(
            (char , i) => 
            `<span style="transform:rotate(${i * 8.2}deg)">${char}</span>`
        ).join('');
    } , [])
  return (

      <div className="circle relative w-[200px] h-[200px] rounded-full flex
      items-center justify-center z-[5]">
        <div className="text w-full h-full absolute ">
          <p>Let's Connect - Copy Email </p>
        </div>
      </div>

  );
}

export default CircleText;
