"use client";
import React from 'react'

const Cards = () => {
  return (
    <>
    <div className='w-full h-screen bg-zinc-900 flex gap-5 px-32'>
        <div className="cardcontainer w-1/2 h-[40vh]">
            <div className="card relative flex items-center justify-center  rounded-xl w-full h-[50vh] bg-[#004D43] font-montreal  text-lime-300">
                <img className='scale-150' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-6 py-3 border-2 rounded-full left-10 bottom-10 border-lime-300'>&copy; 2019-2022</button>
            </div>
        </div>
        <div className="cardcontainer w-1/2 h-[40vh] flex gap-5">
            <div className="relative card rounded-xl w-1/2 h-[50vh] bg-[#212121] font-montreal flex justify-center items-center ">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-6 py-3 border-2 rounded-full'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className="card relative rounded-xl w-1/2 h-[50vh] bg-[#212121] font-montreal flex justify-center items-center">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute left-10 bottom-10 px-6 py-3 border-2 rounded-full'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Cards
