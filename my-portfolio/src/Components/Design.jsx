import React from "react";
import design1 from "../assets/Design1.png";
import design2 from "../assets/Design2.png";
import design3 from "../assets/Design3.png";
import design4 from "../assets/Design4.png";
import portfolio from "../assets/portfolio.png";

const designs = [
  {
    name: "E-Commerce UI Design",
    img: design4,
    tech: "Figma + Prototyping",
    desc: "A complete e-commerce interface designed in Figma with interactive prototyping, showcasing user-friendly layouts for product browsing, cart management, and checkout flow.",
    link: "https://www.figma.com/proto/VfnKl6WkE3yomiI4yx702o/E-Commerce-website?page-id=0%3A1&node-id=3-2&viewport=-1976%2C852%2C0.28&t=IzPMIkxrroAZV5TP-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A2",
  },
  {
    name: "Furniture Shop UI Design",
    img: design3,
    tech: "Figma + Prototyping",
    desc: "A modern and interactive furniture shop interface designed in Figma, focusing on clean visuals and smooth checkout flow.",
    link: "https://www.figma.com/proto/v0fvcaf71jjak2XxYPjfeL/GrowthSpace?page-id=21%3A2&node-id=23-3&viewport=-34%2C23%2C0.1&t=E0ZZq7f4hiNPZVJe-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=23%3A3",
  },
  {
    name: "Portfolio UI Design",
    img: portfolio,
    tech: "Figma + Prototyping",
    desc: "This portfolio design was created in Figma to reflect strong design thinking, visual balance, and user experience.",
    link: "https://coffee-shop-system-oap5.vercel.app/",
  },
  {
    name: "Space Website UI Design",
    img: design1,
    tech: "Figma",
    desc: "A modern and immersive space-themed website UI featuring a futuristic layout and intuitive navigation.",
    link: "https://www.figma.com/proto/v0fvcaf71jjak2XxYPjfeL/GrowthSpace?page-id=13%3A98&team_id=1339542521283069311&node-id=19-55&scaling=min-zoom&content-scaling=fixed&t=ViPBAXqzSGBOe5v5-1",
  },
  {
    name: "Course Landing Page UI Design",
    img: design2,
    tech: "Figma",
    desc: "A visually appealing and responsive landing page designed in Figma with a clean layout and engaging user flow.",
    link: "https://www.figma.com/proto/v0fvcaf71jjak2XxYPjfeL/GrowthSpace?page-id=0%3A1&node-id=8-140&viewport=75%2C226%2C0.12&t=uhR7iQWwjYUve70g-1&scaling=min-zoom&content-scaling=fixed",
  },
];

const Projects = () => {
  return (
    <section
      id="design"
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800"
    >
      <div className="text-center mb-14">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-4">
          Designs
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          A curated collection of my UI/UX design projects showcasing clean
          layouts, usability, and modern visual aesthetics.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {designs.map((p, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden bg-gray-800/60 backdrop-blur-md border border-gray-700 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-60 overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-white">
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
