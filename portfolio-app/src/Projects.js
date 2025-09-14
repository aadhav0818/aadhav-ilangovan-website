import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      name: "3D Orbital Tracker",
      description: "Real-time satellite visualization using OpenGL and TLE propagation.",
      link: "https://github.com/yourusername/project1",
    },
    {
      name: "Satellite Prediction Tool",
      description: "Tool to predict satellite positions using SGP4 in Python.",
      link: "https://github.com/yourusername/project2",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-black text-white min-h-screen px-8 md:px-20 lg:px-40">
      <h1 className="text-4xl font-bold text-center pt-20">Projects</h1>

      <div className="flex border-b border-gray-600 mb-8">
        {projects.map((project, idx) => (
          <button
            key={project.name}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeIndex === idx
                ? "text-white border-b-4 border-white"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveIndex(idx)}
          >
            {project.name}
          </button>
        ))}
      </div>

      <div className="bg-zinc-900 p-8 rounded-xl shadow-lg transition-all">
        <h2 className="text-2xl font-bold mb-4">{projects[activeIndex].name}</h2>
        <p className="text-gray-300 mb-4">{projects[activeIndex].description}</p>
        <a
          href={projects[activeIndex].link}
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}
