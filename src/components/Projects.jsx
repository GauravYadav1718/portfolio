import React from 'react';
import { ExternalLink, Github, Server, Smartphone, ArrowLeftRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Skills Exchange',
      description: 'MERN Stack website in which people exchange there skills and send requests for skills they want and connect with them.',
      image: '/project.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'jwt Authentication', 'Express'],
      liveUrl: 'https://projectskill1718.vercel.app',
      githubUrl: 'https://github.com/GauravYadav1718/projectskill',
      icon: ArrowLeftRight,
      featured: true
    }
    
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here's a showcase of my recent work. Each project demonstrates my skills in MERN-stack development 
            and modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div key={project.id} className="group bg-gray-800/50 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-3">
                          <a 
                            href={project.liveUrl}
                            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200"
                          >
                            <ExternalLink size={20} />
                          </a>
                          <a 
                            href={project.githubUrl}
                            className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors duration-200"
                          >
                            <Github size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-gradient-to-br from-blue-600 to-emerald-600 w-10 h-10 rounded-lg flex items-center justify-center">
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white">{project.title}</h4>
                    </div>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
