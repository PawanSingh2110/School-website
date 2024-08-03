import React from 'react'
import Logo from '../images/school_logo.webp';
import Logo1 from '../images/logo1.webp';
import Logo2 from '../images/logo2.webp';
import Logo3 from '../images/logo3.webp';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
  <div className="container mx-auto px-4 py-6 sm:py-10 flex flex-wrap">

    <div className="w-full sm:w-[327.53px] h-[247px] lg:w-1/4 p-2">
      <div className="mt-6 sm:mt-8 lg:mt-14 text-center sm:text-left">
        <a href="#">
          <img src={Logo} alt="logo" className="w-[100px] h-auto sm:w-20 lg:w-[136px] lg:h-[132px] mx-auto sm:mx-0" />
        </a>
      </div>
      <div className="mt-2 sm:mt-4 text-center sm:text-left">
        Bhalla Farm Pratappur, Ramnagar Road, Kashipur-244713, Distt. U.S.Nagar
      </div>
      <ul className="flex flex-wrap justify-center sm:justify-start mt-4 gap-2">
        <li className="bg-blue-950 p-2 rounded-full">
          <a href="#" className="text-white flex items-center justify-center">
            <FaFacebook />
          </a>
        </li>
        <li className="bg-blue-950 p-2 rounded-full">
          <a href="#" className="text-white flex items-center justify-center">
            <FaInstagram />
          </a>
        </li>
        <li className="bg-blue-950 p-2 rounded-full">
          <a href="#" className="text-white flex items-center justify-center">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>

    <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
      <div className="mb-8 sm:mb-12 mt-6 sm:mt-8 lg:mt-14">
        <h4 className="text-lg sm:text-xl mb-2 sm:mb-4 pb-2 border-b border-gray-700 text-center sm:text-left text-white">
          Latest Blogs
        </h4>
        <div className="space-y-4">
          {[
            { img: Logo1, title: 'Top 10 Study Tips for High School Students', date: 'July 26th, 2024' },
            { img: Logo2, title: 'Fun and Engaging Classroom Activities', date: 'July 18th, 2024' },
            { img: Logo3, title: 'What is Mental Health for Students?', date: 'July 15th, 2024' },
          ].map((blog, index) => (
            <article key={index} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#">
                <img src={blog.img} alt="blog" className="w-16 h-16 rounded-full" />
              </a>
              <div className="text-xs sm:text-sm text-center sm:text-left">
                <h5 className="text-white">{blog.title}</h5>
                <span className="text-gray-400">{blog.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>

    <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
      <div className="mt-6 sm:mt-8 lg:mt-14">
        <h4 className="text-lg sm:text-xl mb-2 sm:mb-4 pb-2 border-b border-gray-700 text-center sm:text-left text-white">Useful Links</h4>
        <ul className="mt-4 space-y-4 text-center sm:text-left">
          {['Privacy Policy', 'Terms & Conditions', 'Contact', 'Sitemap'].map((link, index) => (
            <li key={index}>
              <a href="#" className="hover:underline text-gray-400">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
      <div className="mt-6 sm:mt-8 lg:mt-14">
        <h4 className="text-lg sm:text-xl mb-2 sm:mb-4 pb-2 border-b border-gray-700 text-center sm:text-left text-white">School Timings</h4>
        <div className="mt-4">
          <ul className="space-y-4 text-center sm:text-left">
            <li className="flex flex-col sm:flex-row sm:justify-between">
              <span>Summers:</span>
              <div>07:20 am - 1:30 pm</div>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between">
              <span>Winters:</span>
              <div>07:50 am - 02:00 pm</div>
            </li>
          </ul>
        </div>
        <div className="mt-4 text-center sm:text-left">
          Total Visits: <span className="font-semibold">8572</span>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-gray-800 py-4">
    <div className="container mx-auto text-center text-xs sm:text-sm text-gray-400">
      <p>© 2024 Little Scholars. All Rights Reserved.</p>
      <p>Made with ♥ by <a href="#" className="underline">Puminati Digital</a></p>
    </div>
  </div>
</footer>
  )
}

export default Footer