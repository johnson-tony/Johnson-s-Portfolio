// src/components/About.tsx
import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent leading-tight">
              Building the Future,
              <br />
              One Line at a Time
            </h2>
            <div className="space-y-6 text-lg text-neutral-700 dark:text-neutral-300">
              <p>
                As a self-driven Full Stack Developer Intern & Trainee at Rectoq Software Solutions, I specialize in crafting end-to-end solutions, from intuitive user interfaces to powerful backend systems. I thrive on solving complex problems and delivering high-quality, performant software.
              </p>
              <p>
                My journey spans from crafting pixel-perfect user interfaces to architecting robust backend systems. I believe in writing clean, maintainable code and staying current with emerging technologies. My approach combines technical excellence with a deep understanding of business requirements to deliver solutions that drive meaningful impact.
              </p>
              <p>
                When I'm not coding, you'll find me mentoring junior developers, contributing to open-source projects, or exploring the latest developments in web technologies.
              </p>
            </div>
            <div className="mt-8">
              <a href="#" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-3 text-lg">
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="aspect-square w-full max-w-md rounded-3xl bg-emerald-600/20 dark:bg-emerald-800/30 backdrop-blur-lg border border-emerald-600/30 dark:border-emerald-800/50 p-8 flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center shadow-inner">
                <img 
                  src="https://placehold.co/250x250/065F46/FFFFFF?text=Your+Photo" 
                  alt="Your Profile" 
                  className="rounded-xl shadow-lg border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
