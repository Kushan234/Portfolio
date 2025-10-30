import React from "react";

const Skills = () => {
  const skills = ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Figma", "Git", "JavaScript"];

  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-gray-800">
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
