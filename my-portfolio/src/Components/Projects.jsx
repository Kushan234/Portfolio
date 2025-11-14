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
    tech: "MERN Stack+ Tailwind css + Framer Motion",
    desc: "A responsive coffee shop web app built with React, Tailwind CSS, Framer Motion, and a Node.js backend, featuring product browsing, cart management, and basic admin controls.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "E-Commerce Shopping website",
    img: ecommerce,
    tech: "MERN Stack ",
    desc: "A complete e-commerce web application built using React on the front end and Node.js on the backend, featuring product browsing, cart management, user authentication, and secure order handling.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "Inventory Managment System",
    img: inventory,
    tech: "MERN Stack ",
    desc: "A streamlined inventory management application built using the MERN stack (MongoDB, Express, React, Node.js), with features for product tracking, stock updates, user authentication, and real-time inventory control.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "E-Learning System",
    img: elearning,
    tech: "React + Tailwind css + Framer Motion",
    desc: "A responsive e-learning frontend with animations and modern UI.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "Blog Site",
    img: blog1,
    tech: "Next.js + Framer Motion",
    desc: "A dynamic blog platform built with Next.js and Tailwind CSS, featuring post creation, editing, user authentication, and a fast, responsive UI for smooth content browsing and management.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "To-Do App",
    img: todolist,
    tech: "React ",
    desc: "A simple and responsive to-do list application built with React, allowing users to add, edit, delete, and manage daily tasks with an intuitive interface.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "Blog Site 2",
    img: blog2,
    tech: "Next js + Tailwind css + Framer Motion",
    desc: "A modern blog platform built using Next.js and Tailwind CSS, featuring post creation, editing, user authentication, and a fast, responsive UI for smooth content reading and management.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
   {
    name: "Personal File Mnagement System",
    img: personalFile,
    tech: "HTML + CSS + JavaScript + PHP + MySQL",
    desc: "A secure personal file management system built using HTML, CSS, JavaScript, and PHP with MySQL, allowing users to upload, store, organize, and manage files through a simple and user-friendly interface.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-10 text-blue-400">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          
          <div
            key={p.name}
            className="relative rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300"
          >
            <img src={p.img} className="w-full h-72 object-cover" />

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
              <a className="text-green-300 text-base hover:text-green-500 transform font-bold ml-72" href={p.link}>Link to Visit</a>
            </div>
          </div>
        
        ))}
      
      </div>
      
    </section>
  );
};

export default Projects;
