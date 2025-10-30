import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Contact Me</h2>
      <p className="text-gray-300 mb-6">Interested in working together? Let’s connect!</p>
      <a
        href="mailto:kushan.tharaka@example.com"
        className="px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
      >
        Send Email
      </a>
    </section>
  );
};

export default Contact;
