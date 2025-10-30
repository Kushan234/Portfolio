import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-blue-400"
      >
        Hi, I'm Kushan Tharaka
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-4 text-lg max-w-xl"
      >
        Software Engineer & UI/UX Developer passionate about building modern, responsive, and user-friendly web applications.
      </motion.p>
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        className="mt-8 px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
