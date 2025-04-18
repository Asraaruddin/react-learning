// src/Components/Projects.jsx
import React from "react";

function Projects() {
  const projects = [
    {
      title: "Feedback Form",
      description: "A form using controlled components with validation.",
      tech: ["React", "Bootstrap", "Hooks"],
      github: "https://github.com/Asraaruddin/react-learning",
      live: "#"
    },
    {
      title: "ToDo App",
      description: "A simple to-do app using useState & localStorage.",
      tech: ["React", "CSS", "JavaScript"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather App (WIP)",
      description: "Fetches weather data using API - currently in development.",
      tech: ["React", "API", "useEffect"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section className="text-white py-10 px-4 bg-gray-950">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <div key={index} className="bg-gray-800 p-5 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-sm mb-3">{proj.description}</p>
            <div className="mb-3">
              {proj.tech.map((tech, i) => (
                <span key={i} className="inline-block bg-blue-600 px-2 py-1 text-xs rounded mr-2 mb-2">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href={proj.github} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                GitHub
              </a>
              <a href={proj.live} target="_blank" rel="noreferrer" className="text-green-400 hover:underline">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
