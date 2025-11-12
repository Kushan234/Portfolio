import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
const Navbar = () => {
   const item = ["Home", "About", "Skills", "Design", "Projects",  "Contact", ];
  return (
    <nav className="flex justify-between px-14 items-center py-4  shadow-lg sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-400 text-start">Kushan Tharaka</h1>
      <ul className="flex space-x-14">
        {item.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 duration-300">
              {item}
            </a>
          </li>
        ))}
         <div className="flex space-x-6 text-2xl text-gray-400 ">
          <a href="https://linkedin.com/in/kushan-tharaka-7b8bb22ba">
          <IoLogoLinkedin className="hover:text-blue-400 duration-300"/>
          </a>
          <a href="https://github.com/Kushan234">
          <FaGithub className="hover:text-blue-400 duration-300"/>
          </a>
          <a href="https://facebook.com/Kushan.Tharaka">
           <FaFacebook className="hover:text-blue-400 duration-300"/>
          </a>
       
      </div>
      </ul>
     
    </nav>
  );
};

export default Navbar;
