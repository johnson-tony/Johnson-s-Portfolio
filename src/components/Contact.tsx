// src/components/Contact.tsx
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react'; // Added Github here as it's used in this section

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
            Let's Build Something <span className="text-amber-500">Amazing</span>
          </h2>
          <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project or opportunity.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-neutral-100 dark:bg-neutral-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors shadow-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors shadow-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors shadow-sm"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full text-lg">
                Send Message
              </button>
            </form>
            <div className="mt-10 text-center space-y-4">
              <p className="text-xl text-neutral-700 dark:text-neutral-300 flex items-center justify-center">
                <Mail size={24} className="text-emerald-500 mr-3" />
                <a href="mailto:your.email@example.com" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">your.email@example.com</a>
              </p>
              <p className="text-xl text-neutral-700 dark:text-neutral-300 flex items-center justify-center">
                <Linkedin size={24} className="text-emerald-500 mr-3" />
                <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">linkedin.com/in/your-linkedin</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
