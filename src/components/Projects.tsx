// src/components/Projects.tsx
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Task Management System",
      description: "A comprehensive system for managing tasks and projects, enhancing team collaboration and productivity.",
      tech: ["Laravel", "MySQL", "Blade Templates", "Alpine.js"],
      image: "📝", // Emoji icon
      link: "https://intern3.rectoq.org/"
    },
    {
      title: "E-commerce Product Portal",
      description: "A robust e-commerce platform for product display, user authentication, and order management, featuring a modern UI.",
      tech: ["React", "Express.js", "SQLite/MySQL", "Axios", "Tailwind CSS"],
      image: "🛍️", // Emoji icon
      link: "https://ecom.rectoq.com/"
    },
    {
      title: "Broker Site Information Scraper",
      description: "Developed a JavaScript-based scraper to extract and organize broker information from various financial websites, handling authentication and lazy loading challenges.",
      tech: ["JavaScript", "Puppeteer", "Node.js", "JSON"],
      image: "📈", // Emoji icon
      link: "#" // Placeholder if no live link
    },
    {
      title: "Internal Tools & CRUD Apps",
      description: "Built various internal tools and CRUD applications to streamline operations and manage data efficiently for different internal projects.",
      tech: ["React", "Laravel", "MySQL", "Express.js"],
      image: "🛠️", // Emoji icon
      link: "#" // Placeholder if no live link
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 bg-neutral-100 dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
            Featured <span className="text-amber-500">Projects</span>
          </h2>
          <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            A showcase of innovative solutions and technical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-neutral-900 rounded-3xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 group flex flex-col">
              <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                {project.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-medium transition-colors mt-auto group-hover:underline"
              >
                View Project <ExternalLink size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
