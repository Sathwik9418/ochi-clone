import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-lime-300 rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-montreal text-[3.7vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
What you can expect:</h1>
        <div className="w-full border-t-[1px] mt-20 border-[#99AD53] flex gap-5">
            <div className="w-1/2 pt-10 font-montreal">
            <h1 className='text-[2vw] font-semibold'>Our Approach</h1>
            <button className="px-10 py-6 bg-zinc-900 mt-10 rounded-full uppercase text-white flex gap-10 items-center">Read More
                <div className="w-3 h-3 rounded-full bg-zinc-100"></div>
            </button>
            </div>

            <div className="w-1/2 h-[60vh] bg-[#93aa3e] rounded-2xl mt-10"></div>

        </div>

    </div>
  )
}

export default About
