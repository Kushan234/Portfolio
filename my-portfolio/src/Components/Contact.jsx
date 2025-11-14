import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-4 text-blue-400">
          Let's Connect
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          Feel free to reach out for projects, collaborations, or just a friendly chat.
        </p>

        {/* Contact Card */}
        <div className="bg-white/5 backdrop-blur-lg shadow-xl border border-white/10 p-10 rounded-3xl">

          {/* Input Field */}
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full bg-gray-800/60 border border-gray-700 px-4 py-3 rounded-lg text-gray-200 focus:outline-none 
              focus:border-blue-500 transition-all duration-300"
          />

          {/* Send Button */}
          <a
            href="mailto:kushan.tharaka@example.com"
            className="block w-full mt-5 py-3 rounded-lg 
              bg-gradient-to-r from-blue-600 to-blue-500 
              text-white font-semibold text-center 
              hover:opacity-90 transition-all duration-300"
          >
            Send Message
          </a>

          {/* Social Icons */}
          <div className="flex justify-center mt-10 space-x-8">

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/kushan-tharaka-7b8bb22ba"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br 
                from-blue-900/40 to-blue-600/20 border border-blue-500/20 hover:border-blue-500/60 
                hover:scale-110 transition-all duration-300"
            >
              <IoLogoLinkedin className="text-3xl text-blue-400 hover:text-blue-600 hover:drop-shadow-[0_0_10px_rgb(59,130,246)]" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Kushan234"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br 
                from-gray-800 to-gray-700 border border-gray-500/20 hover:border-gray-400/60 
                hover:scale-110 transition-all duration-300"
            >
              <FaGithub className="text-3xl text-blue-400 hover:text-blue-600 hover:drop-shadow-[0_0_10px_rgb(59,130,246)]" />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/Kushan.Tharaka"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br 
                from-blue-800/40 to-blue-500/20 border border-blue-400/20 hover:border-blue-400/60 
                hover:scale-110 transition-all duration-300"
            >
              <FaFacebook className="text-3xl text-blue-400 hover:text-blue-600 hover:drop-shadow-[0_0_10px_rgb(59,130,246)]" />
            </a>
          </div>

        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Kushan Tharaka • Portfolio
        </p>

      </div>
    </section>
  );
};

export default Contact;
