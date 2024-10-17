"use client";
import { motion, useAnimation } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Power4 } from 'gsap/all';

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const [isHovering, setIsHovering] = useState([false, false]);

  useEffect(() => {
    // Ensure the animations only run after the component mounts
    isHovering.forEach((hovering, index) => {
      if (hovering) {
        cards[index].start({ y: "0%" });
      } else {
        cards[index].start({ y: "100%" });
      }
    });
  }, [isHovering, cards]);

  const handleHover = (index) => {
    const updatedHoverState = [...isHovering];
    updatedHoverState[index] = true;
    setIsHovering(updatedHoverState);
  };

  const handleHoverEnd = (index) => {
    const updatedHoverState = [...isHovering];
    updatedHoverState[index] = false;
    setIsHovering(updatedHoverState);
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-2 pb-20 border-zinc-700">
        <h1 className="text-[5vw] font-montreal tracking-tight">Featured Projects</h1>
      </div>

      <div className="py-20 px-20">
        <div className="cards w-full flex gap-20">
          {/* First Card Container */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer w-1/2 h-[70vh] relative"
          >
            <div className="absolute text-[5vw] overflow-hidden left-full font-grotesk -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tight uppercase z-[10] flex items-center justify-center text-lime-300">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: Power4.easeInOut, delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>

          {/* Second Card Container */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer w-1/2 h-[70vh] relative"
          >
            <div className="absolute text-[5vw] overflow-hidden right-full font-grotesk translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tight uppercase z-[10] flex items-center justify-center text-lime-300">
              {"TRAVA".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: Power4.easeInOut, delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
