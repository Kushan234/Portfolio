import React from "react";
import design1 from '../assets/Design1.png';
import design2 from '../assets/Design2.png';  
import design3 from '../assets/Design3.png';
import design4 from '../assets/Design4.png';

const Design = [
  {
    name: "Portfolio UI Design",
    img: design1,
    tech: "Figma",
    desc: "A full-stack inventory management system with CRUD operations and user authentication.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "E-Commerce UI Design",
    img: design4,
    tech: "Figma",
    desc: "A responsive e-learning frontend with animations and modern UI.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
   name: "Funiture Shop UI Design",
   img: design3,
   tech: "Figma",
   desc: "A responsive e-learning frontend with animations and modern UI.",
   link : "https://coffee-shop-system-oap5.vercel.app/",
 },
  {
    name: "Courser Landing Page UI Design",
    img: design2,
    tech: "Figma",
    desc: "A full-stack inventory management system with CRUD operations and user authentication.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
   {
    name: "Space Website UI Design",
    img: design1,
    tech: "Figma",
    desc: "A responsive e-learning frontend with animations and modern UI.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="design" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-10 text-blue-400">Designs</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {Design.map((p) => (
          <a href={p.link}>
        <div
            key={p.name}
            className="relative rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300">

            <img src={p.img} alt="" className="w-full h-72 object-cover bg-black/10 inset-0.5"/>

             <div
              className="
                absolute bottom-0 left-0 right-0 
                bg-black/60 p-4 
                translate-y-full group-hover:translate-y-0  transition-all duration-500 ">
            <h3 className="text-xl font-semibold mb-2 text-white">{p.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{p.tech}</p>
            <p className="text-gray-300">{p.desc}</p>
          </div>
          </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
