import React from 'react'
import { useState , useEffect } from "react";
import './component.css';
import Image from '../images/school_image.jpeg';
import Image2 from '../images/videoimg1.jpg';
import Image3 from '../images/Mediaimg1.jpg';
{}
const Gallery = () => {
  const [value, setValue] = useState("Photodata");
        

  return (
<section className="bg-silverlight relative w-full  py-12 gap-y-8">
<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
  <div className="mb-16">
    <div className="relative">
      <h2 className="uppercase relative mb-9 pb-2 text-2xl absolute bottom-[-10px] left-0 h-1 w-[65px] custom-content text-4xl gap-y-5">
        Our<span className="ml-1">Gallery</span>
      </h2>
    </div>
  </div>
  <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8 mb-8">
    <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
      <li>
        <button className={`${ value ==="Photodata" ? "border-2 tracking-wide py-2 px-6 overflow-hidden text-white bg-[#202C45] rounded-sm":"button bg-transparent text-black border-none"} `} onClick={()=>setValue("Photodata")}> Photo Album</button>
      </li>
      <li>
        <button className={`${ value ==="Videodata" ? "border-2 tracking-wide py-2 px-6 overflow-hidden text-white bg-[#202C45] rounded-sm":"button bg-transparent text-black border-none"} `} onClick={()=>setValue("Videodata")} >Video Album</button>
      </li>
      <li>
        <button className={`${ value ==="Mediadata" ? "border-2 tracking-wide py-2 px-6 overflow-hidden text-white bg-[#202C45] rounded-sm":"button bg-transparent text-black border-none"} `} onClick={()=>setValue("Mediadata")}>Media Album</button>
      </li>
    </ul>
  </div>
 
    { value === "Photodata" ?(
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      <a 
        className="w-full h-full flex flex-col"
        href="#"
      >
        <img src={Image} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">Cultural Day - 25th July</figcaption>
      </a>
      <a 
        className="w-full h-full flex flex-col"
        href="#"
      >
        <img src={Image} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">Harela Celebration 2024</figcaption>
      </a>
      <a 
        className="w-full h-full flex flex-col"
        href="#"
      >
        <img src={Image} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">Yoga Day 2024</figcaption>
      </a>
      <a 
        className="w-full h-full flex flex-col"
        href="#"
      >
        <img src={Image} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">Activity: Understanding ..</figcaption>
      </a>
      <a 
        className="w-full h-full flex flex-col"
        href="#"
      >
        <img src={Image} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">Safety Week Day 2 - Eye .. </figcaption>
      </a>
      <a 
        className="w-full h-full flex flex-col"
        href="#"
      >
        <img src={Image} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">Safety Week Day 1 - Cyber  ..</figcaption>
      </a>
      <a 
        className="w-full h-full flex flex-col"
        href="#"
      >
        <img src={Image} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">CONGRATULATIONS THE TOPPERS ...</figcaption>
      </a>
      <a 
        className="w-full h-full flex flex-col"
        href="#"
      >
        <img src={Image} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">Principal of Little Scholars ..</figcaption>
      </a>
    
      </div>
    ):value === "Videodata" ?(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image2} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">MOTHER'S DAY</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image2} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">MOTHER'S DAY</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image2} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">LSMUN_2024</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image2} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">MOTHER'S DAY</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image2} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">LSMUN_2024</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image2} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">MOTHER'S DAY</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image2} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">LSMUN_2024</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image2} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">LSMUN_2024</figcaption>
        </a>
        </div>
    ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image3} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">"Success is not final .</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image3} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">"Success is not final,</figcaption>
        </a>

        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image3} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">"Success is not final,</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image3} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">"Success is not final,</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image3} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">"Success is not final,</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image3} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">"Success is not final,</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image3} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">"Success is not final,</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image3} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">"Success is not final,</figcaption>
        </a>
        </div>
    )}
  
  <div className='flex items-center justify-center mt-8 mb-14'>
    <a href="#" className='rounded-[6px] tracking-wider px-6 py-3.5 overflow-hidden transition-all duration-200 ease-in-out bg-[#F2184F] border-[#F2184F] text-white text-sm sm:text-base'>View More</a>
  </div>
</div>
</section>
  )
}

export default Gallery