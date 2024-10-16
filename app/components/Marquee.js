"use client";
import React from 'react'
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <div className='bg-green-600 w-full py-20 rounded-tl-3xl rounded-tr-3xl  '>
        <div className="text border-t-2 border-b-2 flex gap-10 whitespace-nowrap overflow-hidden font-grotesk uppercase">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity , duration:5}} className='text-[17vw] leading-none mb-5 pt-5'>We are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity , duration:5}} className='text-[17vw] leading-none mb-5 pt-5'>We are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity , duration:5}} className='text-[17vw] leading-none mb-5 pt-5'>We are ochi</motion.h1>
        </div>
      
    </div>
  )
}

export default Marquee
