import React from "react";
import coffeeShop from "../assets/coffeeShop.png";
import ecommerce from "../assets/ecommerce.png";
import inventory from "../assets/inventory.png";
import blog1 from "../assets/blog1.png";
import elearning from "../assets/e-learning.png";
import todolist from "../assets/to-do-list.png";
import blog2 from "../assets/blog2.png";
import personalFile from "../assets/personal-file.png";

const projects = [
  {
    name: "Coffee Shop System",
    img: coffeeShop,
    tech: "MERN Stack + Tailwind CSS + Framer Motion",
    desc: "A responsive coffee shop web app featuring product browsing, cart management, and admin controls.",
    link: "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "E-Learning System",
    img: elearning,
    tech: "React + Tailwind CSS + Framer Motion",
    desc: "A responsive e-learning frontend with animations and modern UI.",
    link: "https://e-learning-system-henna.vercel.app/",
  },
  {
    name: "Blog Site",
    img: blog1,
    tech: "Next.js + Framer Motion",
    desc: "A dynamic blog platform with post creation, editing, and authentication.",
    link: "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "E-Commerce Website",
    img: ecommerce,
    tech: "MERN Stack",
    desc: "A complete e-commerce web app with product browsing, cart management, and secure checkout.",
    link: "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "To-Do App",
    img: todolist,
    tech: "React",
    desc: "A simple and responsive task manager with add, edit, and delete features.",
    link: "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "Inventory Management System",
    img: inventory,
    tech: "MERN Stack",
    desc: "A full-stack inventory system with stock tracking and user authentication.",
    link: "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "Blog Site 2",
    img: blog2,
    tech: "Next.js + Tailwind CSS + Framer Motion",
    desc: "A modern blog platform optimized for fast content reading and management.",
    link: "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "Personal File Management System",
    img: personalFile,
    tech: "HTML + CSS + JavaScript + PHP + MySQL",
    desc: "A secure file management system for uploading, organizing, and managing files.",
    link: "https://coffee-shop-system-oap5.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800"
    >
      <div className="text-center mb-14">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-4">
          Projects
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Focused on crafting intuitive, user-centered applications with clean
          layouts, smooth interactions, and modern visual design.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((p, index) => (
          <div
            key={index}
            className="group bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-white">
                {p.name}
              </h3>
              <span className="text-sm text-blue-400 font-medium">
                {p.tech}
              </span>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                {p.desc}
              </p>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
