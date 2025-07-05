// src/components/Experience.tsx
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      year: "Mar 2025 – Present",
      title: "Full Stack Developer Intern & Trainee",
      company: "Rectoq Software Solutions, Bengaluru",
      description: [
        "Built & deployed diverse full-stack applications: developed CRUD apps, trading websites, e-commerce platforms, and internal tools, managing end-to-end development to live deployment.",
        "Engineered intuitive user interfaces from design prototypes using React, implementing real-time user features.",
        "Developed & integrated RESTful APIs (Laravel, Express.js) with front-end via Axios; collaborated on bug fixes & performance tuning.",
        "Executed database migrations (SQLite to MySQL), optimizing data structures for scalability."
      ]
    },
    {
      year: "2023 - 2024", // Placeholder for previous experience
      title: "Junior Web Developer",
      company: "Previous Company, City",
      description: [
        "Assisted in developing and maintaining client-side web applications using HTML, CSS, and JavaScript.",
        "Contributed to backend API development and database management for various projects.",
        "Participated in code reviews and learned best practices in software development."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-8 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
            Professional <span className="text-amber-500">Journey</span>
          </h2>
          <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            My path of growth and contribution in the world of software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 w-5 h-5 bg-emerald-600 rounded-full border-2 border-white dark:border-neutral-900 shadow-md"></div>
              <div className="absolute left-2.5 top-4 w-0.5 h-full bg-emerald-200 dark:bg-emerald-800 last:hidden"></div>
              <div className="bg-white dark:bg-neutral-900 rounded-3xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 ml-6">
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2 text-lg">
                  {exp.year}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-neutral-800 dark:text-neutral-200">
                  {exp.title}
                </h3>
                <div className="text-lg font-medium text-emerald-700 dark:text-emerald-400 mb-4">
                  {exp.company}
                </div>
                <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-300">
                  {exp.description.map((point, descIndex) => (
                    <li key={descIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
