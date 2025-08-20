import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/80 border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-400">Port</span>folio
            </div>
            <p className="text-gray-400 mb-4">
              Building exceptional web experiences with the MERN stack. 
              Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/GauravYadav1718" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/gaurav-yadav-a5325b320/" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="mailto:gybawana@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <div className="space-y-2 text-gray-400">
              <div>Full Stack Development</div>
              <div>MERN Stack Applications</div>
              <div>API Development</div>
              <div>Performance Optimization</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0 flex items-center gap-2">
            © {currentYear} Gaurav Yadav. Made with <Heart size={16} className="text-red-500" />
          </p>
          
          <button
            onClick={scrollToTop}
            className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-200 hover:scale-110 transform"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;