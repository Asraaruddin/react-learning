// src/Components/About.jsx
import React from "react";

function About() {
  return (
    <section className="bg-[#1e1e2f] text-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed mb-6">
          Hello! I'm <span className="text-blue-400 font-semibold">Asrar Uddin</span>, a passionate and self-motivated web developer from Hyderabad, India.
          I enjoy building interactive and responsive websites using modern technologies like <strong>React.js, JavaScript, HTML, CSS, and Bootstrap</strong>.
        </p>
        <p className="text-base text-gray-300">
          I’m currently learning advanced React concepts and building real-world projects to level up my skills.
          I believe in learning by doing, and I'm actively pushing myself through hands-on practice every day.
        </p>
      </div>
    </section>
  );
}

export default About;
