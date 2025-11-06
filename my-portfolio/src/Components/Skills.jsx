import React from "react";
import { RiReactjsLine } from "react-icons/ri";

const Skills = () => {
  const skills = ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Figma", "Git", "JavaScript","PHP",,"SQL","Canva", "Adobe XD","C#"];

  return (
    <section id="skills" className="py-20 px-6 md:px-20  bg-linear-to-r from-gray-950  to-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-blue-400">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div key={skill} className="bg-gray-700 p-4 rounded-xl text-center font-semibold hover:bg-blue-600 transition">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
