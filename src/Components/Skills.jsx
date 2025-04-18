// src/Components/Skills.jsx
import React from 'react';

function Skills() {
  const skills = [
    { name: "HTML", icon: "fa-brands fa-html5", level: "90%" },
    { name: "CSS", icon: "fa-brands fa-css3-alt", level: "85%" },
    { name: "JavaScript", icon: "fa-brands fa-js", level: "80%" },
    { name: "React", icon: "fa-brands fa-react", level: "75%" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap", level: "80%" },
  ];

  return (
    <section className="text-white px-4 py-5 bg-gray-900">
      <h2 className="text-3xl font-bold mb-4 text-center">My Skills</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded shadow text-center">
            <i className={`${skill.icon} text-4xl text-blue-400`}></i>
            <h3 className="mt-2 font-semibold">{skill.name}</h3>
            <div className="w-full bg-gray-700 rounded h-2 mt-2">
              <div className="bg-blue-500 h-2 rounded" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
