import React from "react";
import profilePic from "../assets/profile.png"; // Make sure this image exists

function HeroSection() {
  return (
    <section id="home" className="bg-[#0A192F] text-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-5xl font-bold mb-4">
            I'm a <span className="text-blue-400">Full Stack Web Developer</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6">
  I'm a passionate front-end developer with a strong foundation in modern web technologies. I enjoy building responsive and user-friendly web applications using{" "}
  <span className="text-blue-400 font-semibold">React, Tailwind CSS, Next.js, and MongoDB</span>. I'm always eager to learn, explore new tools, and bring creative ideas to life through code.
</p>

          <a
            href="#about"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            About Me
          </a>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={profilePic}
            alt="Profile Avatar"
            className="w-60 h-60 rounded-full shadow-lg border-4 border-blue-400"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
