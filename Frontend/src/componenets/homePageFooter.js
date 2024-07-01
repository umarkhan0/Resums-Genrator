// src/components/Footer.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=" py-8 grid bg-[#f4faff]  w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      
        <div className="w-full">
         
          <ul className="text-left">
            <li><h3 className="font-bold text-xl mb-2 text-[#333]">Resumes</h3></li>
            <li><NavLink className=" no-underline text-[#333] font-[Raleway]">Resume Examples</NavLink></li>
            <li><NavLink className="no-underline text-[#333] font-[Raleway]">Resume Formats</NavLink></li>
            <li><NavLink className="no-underline text-[#333] font-[Raleway]">Resume Templates</NavLink></li>
            <li><NavLink className="no-underline text-[#333] font-[Raleway]">How to Write a Resume</NavLink></li>
          </ul>
        </div>
        <div className="w-full">
         
          <ul className="text-left">
            <li> <h3 className=" text-[#333] font-bold text-xl mb-2">Cover Letters</h3></li>
            <li><NavLink className="no-underline text-[#333] font-[Raleway]">Cover Letter Examples</NavLink></li>
            <li><a href="#" className="no-underline text-[#333] font-[Raleway]">Cover Letter Formats</a></li>
            <li><a href="#" className="no-underline text-[#333] font-[Raleway]">Cover Letter Templates</a></li>
            <li><a href="#" className="no-underline text-[#333] font-[Raleway]">How to Write a Cover Letter</a></li>
          </ul>
        </div>
        <div className="w-full">
          
          <ul className="text-left">
            <li><h3 className=" text-[#333] font-bold text-xl mb-2">Resources</h3></li>
            <li><a href="#" className="no-underline text-[#333] font-[Raleway]">Job Tips</a></li>
            <li><a href="#" className="no-underline text-[#333] font-[Raleway]">Interview Tips</a></li>
            <li><a href="#" className="no-underline text-[#333] font-[Raleway]">Cover Letter Tips</a></li>
            <li><a href="#" className="no-underline text-[#333] font-[Raleway]">Career Tips</a></li>
            <li><a href="#" className="no-underline text-[#333] font-[Raleway]">Guides</a></li>
          </ul>
        </div>
        <div className="w-full">
          
          <ul className="text-left ">
            <li><h3 className=" text-[#333] font-bold text-xl mb-2">About Us</h3></li>
            <li><a href="#" className="no-underline text-[#333] font-[Raleway]">Reviews</a></li>
            <li><a href="#" className="no-underline text-[#333] font-[Raleway]">Blog</a></li>
            <li><a href="#" className="no-underline text-[#333] font-[Raleway]">Facebook</a></li>
            <li><a href="#" className="no-underline text-[#333] font-[Raleway]">Accessibility</a></li>
            <li><a href="#" className="no-underline text-[#333] font-[Raleway]">Affiliates</a></li>
          </ul>
        </div>
       
      </div>
  );
};

export default Footer;
