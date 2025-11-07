import React from "react";
import coffeeShop from '../assets/coffeeShop.png'
import ecommerce from '../assets/ecommerce.png'


const projects = [
  {
    name: "Coffee shop system",
    img: coffeeShop,
    tech: "React + Framer Motion",
    desc: "A responsive e-learning frontend with animations and modern UI.",
   
  },
  {
    name: "E-Commerce Shopping website",
    img: ecommerce,
    tech: "MERN + Tailwind",
    desc: "A full-stack inventory management system with CRUD operations and user authentication.",
  },
  {
    name: "Inventory Managment System",
    img: coffeeShop,
    tech: "Next.js Full Stack",
    desc: "Dynamic blog with authentication, posts, and comments using Next.js and MongoDB.",
  },
  {
    name: "Blog Site",
    img: coffeeShop,
    tech: "React + Framer Motion",
    desc: "A responsive e-learning frontend with animations and modern UI.",
  },
  {
    name: " E-Learning System",
    img: coffeeShop,
    tech: "React + Framer Motion",
    desc: "A responsive e-learning frontend with animations and modern UI.",
  },
    {
    name: "Blog Site",
    img: ecommerce,
    tech: "React + Framer Motion",
    desc: "A responsive e-learning frontend with animations and modern UI.",
  },
  {
    name: "To-Do App",
    img: coffeeShop,
    tech: "React + Framer Motion",
    desc: "A responsive e-learning frontend with animations and modern UI.",
  },
  {
    name: "Landing Page",
    img: coffeeShop,
    tech: "React + Framer Motion",
    desc: "A responsive e-learning frontend with animations and modern UI.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-10 text-blue-400">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div key={p.name} 
          className="relative rounded-xl overflow-hidden hover:scale-105 transition-transform">

            <img src={p.img}  className="w-full h-72 object-cover" />

            <div className="absolute -inset-3 "></div>
             <div className="absolute bottom-4 left-4 right-4 bg-black/50">
             <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <p className="text-sm text-gray-300">{p.tech}</p>
             <p className="text-gray-200 text-sm mt-1">{p.desc}</p>
      </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Projects;
