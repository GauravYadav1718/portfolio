import React from 'react';
import { Code, Lightbulb, Users, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Turning complex challenges into elegant solutions with creative thinking.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams using Agile methodologies and modern tools.'
    },
    {
      icon: Award,
      title: 'Quality Focus',
      description: 'Delivering high-quality applications with attention to detail and performance.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
            <p className="text-xl text-gray-400 text-center sm:text-left max-w-2xl">
              I'm a passionate full-stack developer with expertise in the MERN stack, 
              dedicated to creating exceptional digital experiences.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="relative">
                <img 
                  src="https://drive.google.com/file/d/1JRi2pSNpXD6CcltZb-AJC4g7kI3U1sZ-/view?usp=sharing" 
                  alt="Gaurav - Full Stack Developer"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-emerald-600 w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl">
                <Code size={32} className="text-white" />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I specialize in building modern web applications using the MERN stack. 
                My journey began with curiosity about how websites work, 
                and it evolved into a passion for creating seamless user experiences.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
          
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">MongoDB</span>
                <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">Express.js</span>
                <span className="bg-cyan-600/20 text-cyan-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-yellow-600/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Node.js</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors duration-300">
                  <div className="bg-gradient-to-br from-blue-600 to-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{highlight.title}</h4>
                  <p className="text-gray-400 text-sm">{highlight.description}</p>
                </div>
              );
            })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-8 bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">N/A</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
