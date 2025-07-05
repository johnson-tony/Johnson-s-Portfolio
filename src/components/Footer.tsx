// src/components/Footer.tsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <a href="#about" className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent mb-4 inline-block transform hover:scale-105 transition-transform duration-300">
            YourName
          </a>
          <p className="text-neutral-400 mb-6 max-w-xl mx-auto">
            Dedicated to building innovative and impactful web solutions, one line of elegant code at a time.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-emerald-400 transition-colors transform hover:scale-110" aria-label="GitHub Profile">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-emerald-400 transition-colors transform hover:scale-110" aria-label="LinkedIn Profile">
              <Linkedin size={28} />
            </a>
            <a href="mailto:your.email@example.com" className="text-neutral-400 hover:text-emerald-400 transition-colors transform hover:scale-110" aria-label="Email Me">
              <Mail size={28} />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-800 text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
