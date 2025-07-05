// src/components/Skills.tsx
import React from 'react';
import { Code, Server, Database, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Globe size={32} />,
      title: "Frontend",
      skills: ["React", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "HTML5", "CSS3", "Axios"]
    },
    {
      icon: <Server size={32} />,
      title: "Backend",
      skills: ["Laravel", "PHP", "Node.js", "Express.js", "Python", "RESTful APIs", "Authentication", "Authorization"]
    },
    {
      icon: <Database size={32} />,
      title: "Databases & Tools",
      skills: ["MySQL", "SQLite", "PostgreSQL", "MongoDB", "Git", "GitHub", "NPM", "Composer", "Docker", "VS Code"]
    },
    {
      icon: <Code size={32} />,
      title: "Concepts & Practices",
      skills: ["Full Stack Development", "UI/UX Principles", "Responsive Design", "API Integration", "Bug Fixing", "Performance Optimization", "Database Migration", "Agile Methodologies"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-neutral-100 dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
            Technical <span className="text-amber-500">Expertise</span>
          </h2>
          <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and impactful applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-neutral-900 rounded-3xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 group">
              <div className="text-emerald-600 dark:text-emerald-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
