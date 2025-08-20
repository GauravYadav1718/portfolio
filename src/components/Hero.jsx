import React, { useEffect, useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Full Stack Developer', 'MERN Stack Expert', 'AI/ML Enthusiast', 'Problem Solver'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;

    const typeText = () => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          const eraseText = () => {
            if (charIndex > 0) {
              setDisplayText(currentRole.slice(0, charIndex - 1));
              charIndex--;
              setTimeout(eraseText, 50);
            } else {
              setCurrentIndex((prev) => (prev + 1) % roles.length);
            }
          };
          eraseText();
        }, 2000);
      }
    };

    typeText();
  }, [currentIndex]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Gaurav Yadav
            </span>
          </h1>
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="border-r-2 border-blue-400 pr-1 animate-pulse">
              {displayText}
            </span>
          </div>
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions using MongoDB, Express.js, React, and Node.js. 
            I transform ideas into powerful, scalable applications that make a difference.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <button className="border-2 border-gray-400 text-gray-300 hover:text-white hover:border-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 hover:bg-white/10">
            <Download size={20} />
            <a href="/asset/resume.pdf" target="_blank" rel="noopener noreferrer">
  Download Resume
</a>
>
            Download Resume
            </a>
          </button>
        </div>

        <div className="animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
