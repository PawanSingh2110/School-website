import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const EventClander = () => {
  return (
    <div>
        <div className=" title w-full h-48 py-10  text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center ">Events Calendar</h1>
        <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">Home <FaArrowRight/> About Us <FaArrowRight/> <span className="font-medium ">Events Calendar</span> </h1>
      </div>
      <div className="px-10 py-16">
        <h1 className="text-4xl text-black font-bold">Events Calendar</h1>
        <hr className=" border-2 border-black rounded-md w-[20%] lg:w-[15%] xl:w-[6%] mt-3" />
      </div>

      
    </div>
  )
}

export default EventClander