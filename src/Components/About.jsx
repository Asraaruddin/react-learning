import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <section className="bg-[#1e1e2f] text-white py-12 px-4" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-400">About Me</h2>

        <p className="text-lg leading-relaxed mb-4">
          I'm <span className="text-blue-400 font-semibold">Asrar Uddin</span>, a passionate and detail-oriented front-end developer based in Hyderabad, India.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          I specialize in building dynamic, accessible, and responsive web applications using:
        </p>

        <ul className="list-disc list-inside text-left text-gray-300 mb-6">
          <li><strong>React.js</strong> – component-based architecture</li>
          <li><strong>JavaScript (ES6+)</strong> – DOM manipulation, modern syntax</li>
          <li><strong>HTML5 & CSS3</strong> – semantic structure and design</li>
          <li><strong>Bootstrap & Tailwind</strong> – responsive UI development</li>
        </ul>

        <p className="text-base text-gray-300 mb-4">
          I’m continuously learning advanced React concepts like Hooks, Context API, and performance optimization.
        </p>

        <p className="text-base text-gray-300 mb-6">
          Besides coding, I value <span className="text-blue-400">problem-solving</span>, effective <span className="text-blue-400">team collaboration</span>, and clear <span className="text-blue-400">communication</span> in any project I contribute to.
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/Asraaruddin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/asraruddin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
