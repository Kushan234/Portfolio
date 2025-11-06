import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.png"; 

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12"
    >
    
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="md:w-2/3"
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-400">About Me</h2>
        <p className="text-gray-300 leading-7 max-w-3xl">
          I'm a dedicated <span className="text-blue-400 font-semibold">Full Stack Developer</span> 
          and <span className="text-blue-400 font-semibold">UI/UX Designer</span> with a passion for 
          creating modern, responsive, and user-centered digital experiences. 
          I specialize in building full-stack web applications using the 
          <span className="text-blue-400 font-semibold"> MERN stack</span> and designing 
          beautiful interfaces with <span className="text-blue-400 font-semibold">Figma</span> 
          and <span className="text-blue-400 font-semibold">Tailwind CSS</span>.
        </p>
      </motion.div>

        
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center md:w-4xl py-2"
      >
        <img
          src={profilePic}
          alt="Kushan Tharaka"
          className="w-72 h-72 object-cover rounded-2xl shadow-lg border-2 border-blue-400 hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

    </section>
  );
};

export default About;
