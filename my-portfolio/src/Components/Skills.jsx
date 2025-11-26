import React from "react";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { PiFigmaLogoBold } from "react-icons/pi";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPhp } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const Skills = () => {
  const skills = [
    {name:"React", icon:<FaReact />}, 
    {name:"Figma",icon:<PiFigmaLogoBold />},
    {name:"Next.js", icon:<RiNextjsFill />},
     {name:"Node.js", icon:<RiNodejsLine />},
      {name:"MongoDB" ,icon:<SiMongodb />},
       {name:"Tailwind CSS",icon:<RiTailwindCssLine />},
         {name:"Git",icon:<FaGitAlt />},
          {name:"JavaScript",icon:<TbBrandJavascript />},
          {name:"PHP",icon:<FaPhp />},
          {name:"SQL",icon:<SiMysql />},
          {name:"Canva",icon:<SiCanva />}, 
          {name:"Adobe XD",icon:<SiAdobexd />},
          {name:"C#",icon:<TbBrandCSharp />}
        ];
  return (
    <section id="skills" className="py-20 px-6 md:px-20  bg-linear-to-r from-gray-950  to-gray-800">
      <h2 className="text-5xl font-extrabold justify-center mb-5 text-center text-blue-400 ">Skills</h2>
          <p className="text-xl px-10 font-semibold justify-center text-center mb-14 text-gray-400">“A versatile developer skilled in creating responsive web applications, writing clean code, and building seamless user experiences with modern tools and frameworks.”</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div key={skill} className="bg-gray-700 p-4 rounded-xl justify-center text-center font-semibold hover:bg-blue-600 transition">
            {skill.name}
            <div className="justify-center mt-2 flex">
            <span className="text-3xl text-blue-400">{skill.icon}</span>
            </div>
          
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
