import React from "react";
import design1 from '../assets/Design1.png';
import design2 from '../assets/Design2.png';  
import design3 from '../assets/Design3.png';
import design4 from '../assets/Design4.png';
import portfolio from '../assets/portfolio.png';

const Design = [
  
  {
    name: "E-Commerce UI Design",
    img: design4,
    tech: "Figma + Prototyping",
    desc: "A complete e-commerce interface designed in Figma with interactive prototyping, showcasing user-friendly layouts for product browsing, cart management, and checkout flow with a modern and intuitive UI/UX.",
    link : "https://www.figma.com/proto/VfnKl6WkE3yomiI4yx702o/E-Commerce-website?page-id=0%3A1&node-id=3-2&viewport=-1976%2C852%2C0.28&t=IzPMIkxrroAZV5TP-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A2",
  },
  {
   name: "Funiture Shop UI Design",
   img: design3,
   tech: "Figma + Prototyping",
   desc: "A modern and interactive furniture shop interface designed in Figma, with prototyping to showcase product browsing, selection, and checkout flows, focusing on a clean, user-friendly, and visually appealing experience.",
   link : "https://www.figma.com/proto/v0fvcaf71jjak2XxYPjfeL/GrowthSpace?page-id=21%3A2&node-id=23-3&viewport=-34%2C23%2C0.1&t=E0ZZq7f4hiNPZVJe-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=23%3A3",
 },
  {
    name: "Portfolio UI Design",
    img: portfolio,
    tech: "Figma + Prototyping",
    desc: "This portfolio design was created in Figma to reflect my design thinking, visual balance, and attention to user experience.",
    link : "https://coffee-shop-system-oap5.vercel.app/",
  },
   {
    name: "Space Website UI Design",
    img: design1,
    tech: "Figma",
    desc: "A modern and immersive space-themed website UI designed in Figma, featuring a visually engaging layout, intuitive navigation, and a futuristic user experience.",
    link : "https://www.figma.com/proto/v0fvcaf71jjak2XxYPjfeL/GrowthSpace?page-id=13%3A98&team_id=1339542521283069311&node-id=19-55&scaling=min-zoom&content-scaling=fixed&t=ViPBAXqzSGBOe5v5-1",
  },
   {
    name: "Courser Landing Page UI Design",
    img: design2,
    tech: "Figma",
    desc: "A visually appealing and responsive landing page designed in Figma, focusing on clean layout, intuitive navigation, and engaging user experience.",
    link : "https://www.figma.com/proto/v0fvcaf71jjak2XxYPjfeL/GrowthSpace?page-id=0%3A1&node-id=8-140&viewport=75%2C226%2C0.12&t=uhR7iQWwjYUve70g-1&scaling=min-zoom&content-scaling=fixed",
  },
 
];

const Projects = () => {
  return (
    <section id="design" className="py-20 px-6 md:px-20">
      <h2 className="text-5xl font-extrabold justify-center mb-5 text-center text-blue-400">Designs</h2>
      <p className="text-xl px-10 font-semibold justify-center text-center mb-14 text-gray-400">“A curated collection of my real-world projects showcasing my abilities in full-stack development, UI/UX design, and building functional, visually appealing digital solutions.”</p>
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
             <a className="text-green-300 text-base hover:text-green-500 transform font-bold ml-72" href={p.link}>Link to Visit</a>
          </div>
          </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
