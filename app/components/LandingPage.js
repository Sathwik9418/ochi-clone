"use client";
import { easeIn, motion } from 'framer-motion';
import React from 'react'
import { TfiArrowTopRight } from "react-icons/tfi";

function LandingPage() {
  
  return (
    <div data-scroll data-scroll-speed="-.8"   className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-52 px-20">

        {["We Create" ,"Eye Opening" ,"Presentations"].map((item,index)=>{
          return (
            <div className="masker">
                <div className="w-fit flex items-end overflow-hidden">
                  {index===1 && 
                  (
                    <motion.div 
                    initial={{width:0}} 
                    animate={{width:"9vw"}} 
                    transition={{ease:[0.76, 0, 0.24, 1], duration : 1.1}} 
                    className='mr-[1vw] w-[8vw] rounded-md h-[5.7vw] relative bg-green-500 bg-cover bg-center'
                    style={{ backgroundImage: "url('/images/img.jpg')" }} // Add the path to your image here
                  ></motion.div>
                  )}
                  <h1 key={index} className="pt-[2vw] -mb-[.1vw] uppercase text-[8vw] leading-[.76] font-grotesk">
                  {item}
                </h1>
            </div>
          </div>
          )
        })}
        

      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between py-5 px-20 font-montreal">
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>
          <p className="text-md font-light tracking-tight leading-none ">{item}</p>
        )}

        <div className="start flex items-center gap-2">
          <div className='px-5 py-2 border-[1px] border-zinc-500 rounded-full uppercase font-montreal text-md'>
            start the project
          </div>
          <div className="arrow w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-500">
          <TfiArrowTopRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
