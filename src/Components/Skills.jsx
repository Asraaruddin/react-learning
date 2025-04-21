import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    { name: "HTML5", icon: "fa-brands fa-html5", level: "90%", label: "Advanced" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt", level: "85%", label: "Advanced" },
    { name: "JavaScript", icon: "fa-brands fa-js", level: "80%", label: "Advanced" },
    { name: "React.js", icon: "fa-brands fa-react", level: "75%", label: "Intermediate" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap", level: "80%", label: "Advanced" },
    { name: "Node.js", icon: "fa-brands fa-node-js", level: "70%", label: "Intermediate" },
    { name: "Express.js", icon: "fa-solid fa-server", level: "65%", label: "Intermediate" },
    { name: "MongoDB", icon: "fa-solid fa-database", level: "70%", label: "Intermediate" },
  ];

  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">
        <span className="text-blue-400">Technical</span> Skills
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/40 transition-shadow duration-300 text-center"
          >
            <i className={`${skill.icon} text-5xl text-blue-400`} title={skill.name}></i>
            <h3 className="mt-4 text-xl font-semibold">{skill.name}</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: skill.level }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-300">Level: {skill.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
