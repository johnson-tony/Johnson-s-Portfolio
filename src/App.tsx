
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download, Moon, Sun, Code, Server, Database, Globe } from 'lucide-react';
import './App.css';

const Navigation = ({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/10 dark:bg-black/30 backdrop-blur-lg border-b border-white/20 dark:border-white/10 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-800 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-neutral-700 dark:text-neutral-300 hover:text-green-700 dark:hover:text-green-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl mt-4 p-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-neutral-700 dark:text-neutral-300 hover:text-green-700 dark:hover:text-green-400 transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-yellow-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(at_40%_20%,hsla(28,100%,74%,1)_0px,transparent_50%),radial-gradient(at_80%_0%,hsla(189,100%,56%,1)_0px,transparent_50%),radial-gradient(at_0%_50%,hsla(355,100%,93%,1)_0px,transparent_50%),radial-gradient(at_80%_50%,hsla(340,100%,76%,1)_0px,transparent_50%),radial-gradient(at_0%_100%,hsla(22,100%,77%,1)_0px,transparent_50%),radial-gradient(at_80%_100%,hsla(242,100%,70%,1)_0px,transparent_50%),radial-gradient(at_0%_0%,hsla(343,100%,76%,1)_0px,transparent_50%)] opacity-30 dark:opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block p-4 rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-white/20 dark:border-white/10 mb-8 animate-bounce">
            <Code size={48} className="text-green-700" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-700 to-green-800 bg-clip-text text-transparent">
            Senior Full Stack
            <br />
            Developer
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl mx-auto">
            Crafting exceptional digital experiences with modern technologies.
            Specialized in React, Laravel, and scalable cloud solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View My Work
            </a>
            <a href="#contact" className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
              Get In Touch
            </a>
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            <a href="#" className="p-3 rounded-full bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-white/20 dark:border-white/10 hover:bg-green-100 dark:hover:bg-green-900 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-white/20 dark:border-white/10 hover:bg-green-100 dark:hover:bg-green-900 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-white/20 dark:border-white/10 hover:bg-green-100 dark:hover:bg-green-900 transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-green-700 to-green-800 bg-clip-text text-transparent">
              Building the Future,
              <br />
              One Line at a Time
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400">
              <p>
                With over 8 years of experience in full-stack development, I specialize in creating 
                scalable, performant applications that solve real-world problems. My journey spans 
                from crafting pixel-perfect user interfaces to architecting robust backend systems.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying current with emerging 
                technologies. My approach combines technical excellence with a deep understanding 
                of business requirements to deliver solutions that drive meaningful impact.
              </p>
              <p>
                When I'm not coding, you'll find me mentoring junior developers, contributing to 
                open-source projects, or exploring the latest developments in web technologies.
              </p>
            </div>
            <div className="mt-8">
              <a href="#" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-white/20 dark:border-white/10 p-8 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center">
                <div className="text-white text-6xl font-bold">JS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      icon: <Globe size={32} />,
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "SASS"]
    },
    {
      icon: <Server size={32} />,
      title: "Backend",
      skills: ["Laravel", "ASP.NET Core", "Node.js", "Python", "PHP", "REST APIs"]
    },
    {
      icon: <Database size={32} />,
      title: "Database & Tools",
      skills: ["SQL Server", "PostgreSQL", "MongoDB", "Git", "AWS", "Docker"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-green-800 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 group">
              <div className="text-green-700 dark:text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
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

const Experience = () => {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Leading development of enterprise-scale applications using React and Laravel."
    },
    {
      year: "2021 - 2023",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Built and maintained multiple client applications with modern tech stack."
    },
    {
      year: "2019 - 2021",
      title: "Frontend Developer",
      company: "StartUp Ventures",
      description: "Focused on creating responsive, accessible user interfaces."
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-8 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-green-800 bg-clip-text text-transparent">
            Professional Journey
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 w-4 h-4 bg-green-600 rounded-full"></div>
              <div className="absolute left-2 top-4 w-0.5 h-full bg-green-200 dark:bg-green-800 last:hidden"></div>
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 ml-6">
                <div className="text-green-600 dark:text-green-400 font-semibold mb-2">
                  {exp.year}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-neutral-800 dark:text-neutral-200">
                  {exp.title}
                </h3>
                <div className="text-lg font-medium text-green-700 dark:text-green-400 mb-4">
                  {exp.company}
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend and Laravel backend. Features include payment integration, inventory management, and admin dashboard.",
      tech: ["React", "Laravel", "MySQL", "Stripe"],
      image: "🛒",
      link: "#"
    },
    {
      title: "Project Management Tool",
      description: "Collaborative project management application with real-time updates, task tracking, and team communication features.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Socket.io"],
      image: "📊",
      link: "#"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation platform with multiple templates, custom prompts, and content optimization features.",
      tech: ["React", "Python", "OpenAI API", "MongoDB"],
      image: "🤖",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-green-800 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A showcase of innovative solutions and technical excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 group">
              <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                {project.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link}
                className="inline-flex items-center gap-2 text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium transition-colors"
              >
                View Project <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-green-800 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button type="submit" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-800 bg-clip-text text-transparent mb-4">
            Portfolio
          </div>
          <p className="text-neutral-400 mb-6">
            Crafting exceptional digital experiences
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-800 text-neutral-500">
            © 2024 Portfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
