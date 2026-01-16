import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-20 bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden"
    >
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
       
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl opacity-70 group-hover:opacity-100 transition" />
          <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-3xl p-4 shadow-xl">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-[420px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-extrabold text-white">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Me
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-7">
            Hi! I’m{" "}
            <span className="text-blue-400 font-semibold">Kushan Tharaka</span>, a
            passionate{" "}
            <span className="text-blue-400 font-semibold">UI/UX Designer</span>{" "}
            with strong expertise in{" "}
            <span className="text-blue-400 font-semibold">
              Full Stack Development
            </span>
            . I craft digital products that are visually engaging, intuitive,
            and technically sound.
          </p>

          <p className="text-gray-400 text-base leading-7">
            I specialize in creating modern interfaces using{" "}
            <span className="text-blue-400 font-semibold">Figma</span>,{" "}
            <span className="text-blue-400 font-semibold">Tailwind CSS</span>,
            and{" "}
            <span className="text-blue-400 font-semibold">React</span>, ensuring
            seamless experiences from concept to production.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10 transition backdrop-blur-md"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
