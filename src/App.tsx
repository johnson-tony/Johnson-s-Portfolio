
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
      scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold gradient-text">
            Portfolio
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-neutral-700 dark:text-neutral-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors duration-300 font-medium"
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
          <div className="md:hidden glass-effect rounded-xl mt-4 p-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-neutral-700 dark:text-neutral-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors duration-300 font-medium py-2"
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30 dark:opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="text-center animate-fade-in">
          <div className="inline-block p-4 rounded-2xl glass-effect mb-8 animate-float">
            <Code size={48} className="text-primary-700" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 gradient-text animate-slide-up">
            Senior Full Stack
            <br />
            Developer
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl mx-auto animate-slide-up">
            Crafting exceptional digital experiences with modern technologies.
            Specialized in React, Laravel, and scalable cloud solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
          <div className="flex justify-center space-x-6 mt-12 animate-slide-up">
            <a href="#" className="p-3 rounded-full glass-effect hover:bg-primary-100 dark:hover:bg-primary-900 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 rounded-full glass-effect hover:bg-primary-100 dark:hover:bg-primary-900 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 rounded-full glass-effect hover:bg-primary-100 dark:hover:bg-primary-900 transition-all duration-300">
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
    <section id="about" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 gradient-text">
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
              <a href="#" className="btn-primary inline-flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="aspect-square rounded-3xl glass-effect p-8 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center">
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
    <section id="skills" className="section-padding bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Technical Expertise
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card animate-slide-up group">
              <div className="text-primary-700 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
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
    <section id="experience" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Professional Journey
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0 animate-slide-up">
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
              <div className="absolute left-2 top-4 w-0.5 h-full bg-primary-200 dark:bg-primary-800 last:hidden"></div>
              <div className="card ml-6">
                <div className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                  {exp.year}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-neutral-800 dark:text-neutral-200">
                  {exp.title}
                </h3>
                <div className="text-lg font-medium text-primary-700 dark:text-primary-400 mb-4">
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
    <section id="projects" className="section-padding bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A showcase of innovative solutions and technical excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group animate-slide-up">
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
                  <span key={techIndex} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link}
                className="inline-flex items-center gap-2 text-primary-700 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium transition-colors"
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
    <section id="contact" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card animate-slide-up">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
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
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
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
      <div className="container-custom">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-4">
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
