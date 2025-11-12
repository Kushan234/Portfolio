import React from "react";
import coffeeShop from '../assets/coffeeShop.png';
import ecommerce from '../assets/ecommerce.png';
import inventory from '../assets/inventory.png';
import blog1 from '../assets/blog1.png';
import elearning from '../assets/e-learning.png';
import todolist from '../assets/to-do-list.png';
import blog2 from '../assets/blog2.png';
import personalFile from '../assets/personal-file.png';

const projects = [
  {
    name: "Coffee shop system",
    img: coffeeShop,
    tech: "React + Framer Motion",
    desc: "A responsive e-learning frontend with animations and modern UI.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "E-Commerce Shopping website",
    img: ecommerce,
    tech: "MERN + Tailwind",
    desc: "A full-stack inventory management system with CRUD operations and user authentication.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "Inventory Managment System",
    img: inventory,
    tech: "Next.js Full Stack",
    desc: "Dynamic blog with authentication, posts, and comments using Next.js and MongoDB.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "E-Learning System",
    img: elearning,
    tech: "React + Framer Motion",
    desc: "A responsive e-learning frontend with animations and modern UI.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "Blog Site",
    img: blog1,
    tech: "React + Framer Motion",
    desc: "A responsive e-learning frontend with animations and modern UI.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "To-Do App",
    img: todolist,
    tech: "React + Framer Motion",
    desc: "A responsive e-learning frontend with animations and modern UI.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "Landing Page",
    img: blog2,
    tech: "React + Framer Motion",
    desc: "A responsive e-learning frontend with animations and modern UI.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
   {
    name: "Personal File Mnagement System",
    img: personalFile,
    tech: "React + Framer Motion",
    desc: "A responsive e-learning frontend with animations and modern UI.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-10 text-blue-400">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <a href={p.link}>
          <div
            key={p.name}
            className="relative rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300"
          >
            <img src={p.img} className="w-full h-72 object-cover" />

            {/* Sliding Text Container */}
            <div
              className="
                absolute bottom-0 left-0 right-0 
                bg-black/60 p-4 
                translate-y-full 
                group-hover:translate-y-0 
                transition-all duration-500
              "
            >
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <p className="text-sm text-gray-300">{p.tech}</p>
              <p className="text-gray-200 text-sm mt-1">{p.desc}</p>
            </div>
          </div>
          </a>
        ))}
      
      </div>
      
    </section>
  );
};

export default Projects;
