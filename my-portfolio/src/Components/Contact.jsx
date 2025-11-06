import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-20  bg-linear-to-r from-gray-950  to-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Contact Me</h2>
      <p className="text-gray-300 mb-6">Interested in working together? Let’s connect!</p>
      <input type="text" value="Drop Message here" className="bg-gray-400 text-gray-700 w-80 h-10 mr-4 rounded-lg px-2"/>
      <a
        href="mailto:kushan.tharaka@example.com"
        className="px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
      >
        Send Email
      </a>

       <div className="flex space-x-6 text-2xl text-gray-400 mt-14 ">
               <a className="hover:text-blue-400" href="https://linkedin.com/in/kushan-tharaka-7b8bb22ba">
               <IoLogoLinkedin />
               </a>
               <a className="hover:text-blue-400" href="https://github.com/Kushan234">
               <FaGithub />
               </a>
               <a className="hover:text-blue-400" href="https://facebook.com/Kushan.Tharaka">
                <FaFacebook />
               </a>
            
           </div>
    </section>
  );
};

export default Contact;
