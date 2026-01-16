import React from "react";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiNodejsLine, RiTailwindCssLine } from "react-icons/ri";
import { PiFigmaLogoBold } from "react-icons/pi";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPhp } from "react-icons/fa6";
import { SiMysql, SiCanva, SiAdobexd, SiAdobephotoshop } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Figma", icon: <PiFigmaLogoBold /> },
    { name: "React", icon: <FaReact /> },
    { name: "Adobe XD", icon: <SiAdobexd /> },
    { name: "Canva", icon: <SiCanva /> },
    { name: "Next.js", icon: <RiNextjsFill /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssLine /> },
    { name: "Node.js", icon: <RiNodejsLine /> },
    { name: "JavaScript", icon: <TbBrandJavascript /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    { name: "Git & GitHub", icon: <FaGitAlt /> },
    { name: "SQL & NoSQL", icon: <SiMysql /> },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800"
    >
      <div className="text-center mb-14">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-4">Skills</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          A versatile developer focused on building clean, responsive, and
          user-friendly web applications using modern tools and frameworks.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400 text-3xl mb-4 group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <h3 className="text-sm font-semibold text-gray-200">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
