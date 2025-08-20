import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', level: 70, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 95, color: 'from-yellow-500 to-orange-500' },
        { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 85, color: 'from-cyan-500 to-blue-500' }
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', level: 88, color: 'from-green-500 to-emerald-500' },
        { name: 'Express.js', level: 85, color: 'from-gray-500 to-gray-700' },
        { name: 'MongoDB', level: 87, color: 'from-green-600 to-green-800' },
        { name: 'RESTful APIs', level: 92, color: 'from-purple-500 to-pink-500' }
      ]
    },
    {
      category: 'Tools & Others',
      technologies: [
        { name: 'Git/GitHub', level: 70, color: 'from-gray-600 to-black' },
        { name: 'AWS', level: 60, color: 'from-orange-600 to-yellow-600' },
        { name: 'Postmen', level: 65, color: 'from-red-500 to-pink-500' },
        { name: 'VsCode',level : 85,color :'from-gray-600 to-black'}
      ]
    },
    {
      category: 'Programming Languages',
      technologies:[
        { name: 'C++', level: 75, color: 'from-gray-600 to-black' },
        { name: 'C', level: 70, color: 'from-orange-600 to-yellow-600' },
         { name: 'Python', level: 60, color: 'from-green-500 to-emerald-500' },

      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life. 
            I'm always learning and expanding my skill set.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {skillCategory.category}
              </h3>
              <div className="space-y-6">
                {skillCategory.technologies.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Responsive Design', 'RESTful APIs','Socket.io',
              'JWT Authentication', 'Data Structures'
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-600/20 to-emerald-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;