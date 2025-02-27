import React from 'react';

const projects = [
  {
    title: "Productivity App",
    description: "A task management app with gamification features to boost productivity.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    github: "https://github.com/kuppal25/productivity-app",
    demo: "#", // Add live link if hosted
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-orange-800 text-center mb-8">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-orange-200">
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <p className="text-sm text-gray-500 mt-2">Tech: {project.tech.join(", ")}</p>
            <div className="mt-4 flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;