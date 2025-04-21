import React from "react";
import profilePic from "../assets/profile.png";

function HeroSection() {
  return (
    <section id="home" className="bg-[#0A192F] text-white py-16 px-6 pt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-5xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-blue-400">Asrar Uddin</span>
            <br />
            a <span className="text-blue-400">Full Stack Web Developer</span>
          </h2>

          {/* Subheading tagline */}
          <p className="text-xl italic text-gray-400 mb-2">
            Crafting responsive and performant web applications
          </p>

          <p className="text-lg text-gray-300 mb-6">
            I’m a passionate front-end developer with a strong foundation in modern web technologies.
            I enjoy building responsive and user-friendly web applications using{" "}
            <span className="text-blue-400 font-semibold">Javascript,React, Tailwind-CSS,Nodejs, and MongoDB</span>.
            Always eager to learn, collaborate, and turn creative ideas into clean, scalable code.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <a
              href="#about"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
            >
              About Me
            </a>
            <a
              href="/Asrar_Uddin_Resume.pdf"
              download
              className="bg-transparent border border-blue-500 text-blue-400 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition shadow-md"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="text-white underline hover:text-blue-400 transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-2xl mt-2">
            <a
              href="https://github.com/asraruddin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/asraruddin/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Right Image Section with animation */}
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
          <img
            src={profilePic}
            alt="Profile Avatar"
            className="w-60 h-60 rounded-full shadow-lg border-4 border-blue-400 object-cover transform transition duration-500 hover:scale-105 hover:-translate-y-1 animate-float"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
