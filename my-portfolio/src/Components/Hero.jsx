import React from "react";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center">
    <motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-6xl font-bold text-white"
>
  Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"> Kushan Tharaka</span>
</motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-4 text-lg max-w-xl"
      >
        Full Stack Developer & UI/UX Developer 
       
      </motion.p>
       <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-2 text-base max-w-xl text-gray-400"
      >
      
        I'm a passionate Full Stack Developer & UI/UX Developer who loves building modern, responsive, and user-friendly web applications with clean code and creative design.
      </motion.p>
     <div className="flex space-x-4">
       <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        className="mt-8 px-6 py-3 bg-blue-600 flex rounded-lg text-white font-semibold hover:bg-blue-700 transition"
      >
        View My Work 
       <FaArrowUpRightFromSquare className="justify-center items-center p-1 ml-2 w-5 h-5 mt-1 text-lg"/>
      </motion.a>
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        className="mt-8 px-6 py-3 flex rounded-lg text-white font-medium border-1 outline-gray-400  transition"
      >
        Download CV 
        <AiOutlineDownload className="justify-center items-center p-1 ml-2 w-7 h-7 text-lg" />
      </motion.a>
     </div>
    </section>
  );
};

export default Hero;
