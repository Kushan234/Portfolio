// App.jsx
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Kushan Tharaka | Software Engineer & UI/UX Developer
      </footer>
    </div>
  );
};

export default App;
