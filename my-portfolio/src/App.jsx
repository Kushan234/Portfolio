// App.jsx
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Design from "./Components/Design";

const App = () => {
  return (
    <div className=" bg-linear-to-r from-black  to-blue-900 text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Design />
      <Contact />
      <footer className="text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Kushan Tharaka | FullStack Develoer & UI/UX Developer
      </footer>
    </div>
  );
};

export default App;
