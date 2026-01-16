import React, { useState } from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const items = ["Home", "About", "Skills", "Design", "Projects", "Contact"];
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-900/70 border-b border-white/10 shadow-lg">
      <div className="flex justify-between items-center px-6 md:px-14 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400 tracking-wide">
          Kushan Tharaka
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {items.map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-gray-300 hover:text-blue-400 transition"
              >
                {item}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-xl text-gray-400 ml-6">
            <a
              href="https://linkedin.com/in/kushan-tharaka-7b8bb22ba"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="https://github.com/Kushan234"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://facebook.com/Kushan.Tharaka"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-white/10 px-6 py-6 space-y-4">
          {items.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold text-gray-300 hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}

          <div className="flex gap-6 pt-4 text-2xl text-gray-400">
            <a
              href="https://linkedin.com/in/kushan-tharaka-7b8bb22ba"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="https://github.com/Kushan234"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://facebook.com/Kushan.Tharaka"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
