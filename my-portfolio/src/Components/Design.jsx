import React from "react";

const Design = [
  {
    name: "Portfolio UI Design",
    desc: "A full-stack inventory management system with CRUD operations and user authentication.",
  },
  {
    name: "Courser Landing Page UI Design",
    desc: "A full-stack inventory management system with CRUD operations and user authentication.",
  },
  {
    name: "Funiture Shop UI Design",
    desc: "A responsive e-learning frontend with animations and modern UI.",
  },
];

const Projects = () => {
  return (
    <section id="design" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-10 text-blue-400">Designs</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {Design.map((p) => (
          <div key={p.name} className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2 text-white">{p.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{p.tech}</p>
            <p className="text-gray-300">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
