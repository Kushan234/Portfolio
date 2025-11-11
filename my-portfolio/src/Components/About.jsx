import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-20 justify-center flex flex-col-reverse md:flex-row items-center gap-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative group"
      >

        <div className="absolute  ml-20 inset-0 rounded-full blur-2xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-500"></div>


        <img
          src={profilePic}
          alt="Profile"
          className="w-64 h-64 md:w-96 md:h-102 object-cover rounded-l-full border-4 border-blue-400 shadow-xl group-hover:scale-105 transition-transform duration-500 relative z-10 justify-center px-2" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="backdrop-blur-md bg-white/5 p-12 rounded-e-full border border-white/10 shadow-xl max-w-2xl">
        <h2 className="text-4xl font-bold mb-4 text-blue-400 tracking-wide">
          About Me
        </h2>

       <p className="text-gray-300 text-lg leading-7">
      Hi! I’m <span className="text-blue-400 font-semibold">Kushan Tharaka</span>, a
      dedicated <span className="text-blue-400 font-semibold">UI/UX Designer</span> with a strong
      foundation in <span className="text-blue-400 font-semibold">Full Stack Development</span>. 
      I’m passionate about creating intuitive, user-centered designs that not only look great but also provide seamless experiences.
      <br /><br />
      I specialize in designing engaging interfaces using <span className="text-blue-400 font-semibold">Figma</span> and 
      implementing them with <span className="text-blue-400 font-semibold">Tailwind CSS</span> and modern frameworks like <span className="text-blue-400 font-semibold">React</span>. 
      My focus is on bridging the gap between design and functionality to craft polished digital experiences that delight users.
    </p>

      </motion.div>
    </section>
  );
};

export default About;
