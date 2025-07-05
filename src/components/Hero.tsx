// src/components/Hero.tsx
import React from 'react';
import { Code, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 relative overflow-hidden pt-20">
      {/* Background blobs for visual interest */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-16">
        <div className="text-center bg-white/5 dark:bg-neutral-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border border-white/10 dark:border-neutral-800 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="inline-block p-4 rounded-full bg-emerald-600 text-white mb-8 shadow-lg transform hover:rotate-6 transition-transform duration-300">
            <Code size={48} />
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent leading-tight">
            Hello, I'm <span className="text-amber-400 dark:text-amber-300">Your Name</span>
            <br />
            Full Stack Developer
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-3xl mx-auto font-light">
            Crafting exceptional digital experiences with modern technologies. Specialized in **React, Laravel**, and scalable cloud solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
              View My Work
            </a>
            <a href="#contact" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg">
              Get In Touch
            </a>
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 dark:bg-neutral-800/50 backdrop-blur-sm border border-white/20 dark:border-neutral-700 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-all duration-300 text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400" aria-label="GitHub Profile">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 dark:bg-neutral-800/50 backdrop-blur-sm border border-white/20 dark:border-neutral-700 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-all duration-300 text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400" aria-label="LinkedIn Profile">
              <Linkedin size={28} />
            </a>
            <a href="mailto:your.email@example.com" className="p-3 rounded-full bg-white/10 dark:bg-neutral-800/50 backdrop-blur-sm border border-white/20 dark:border-neutral-700 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-all duration-300 text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400" aria-label="Email Me">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
