// src/App.tsx
import React, { useState, useEffect } from 'react';

// Import all individual components from the components folder
// Removed .tsx extensions from import paths
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Effect to apply/remove 'dark' class to the html element based on darkMode state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]); // Rerun this effect whenever darkMode state changes

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    // Main container div for the entire application
    // 'min-h-screen' ensures it takes at least the full viewport height
    // 'font-inter' applies the custom Inter font globally
    <div className="min-h-screen font-inter">
      {/* Navigation component, passing darkMode state and toggle function as props */}
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Render each section component in order */}
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
