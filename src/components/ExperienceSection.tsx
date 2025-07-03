
import React from 'react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications serving 1M+ users. Architected microservices infrastructure reducing deployment time by 60%.',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      title: 'DevOps Engineer',
      company: 'CloudFirst Inc.',
      period: '2020 - 2022',
      description: 'Implemented CI/CD pipelines and cloud infrastructure. Reduced system downtime by 80% and improved deployment frequency by 300%.',
      technologies: ['AWS', 'Terraform', 'Jenkins', 'Docker', 'Monitoring']
    },
    {
      title: 'Mobile App Developer',
      company: 'StartupHub',
      period: '2019 - 2020',
      description: 'Developed cross-platform mobile applications for iOS and Android. Published 5 apps with 100K+ combined downloads.',
      technologies: ['React Native', 'Flutter', 'Firebase', 'TypeScript']
    },
    {
      title: 'Frontend Developer',
      company: 'WebAgency Pro',
      period: '2018 - 2019',
      description: 'Created responsive web interfaces and improved user experience. Increased client satisfaction scores by 40%.',
      technologies: ['React', 'Vue.js', 'SASS', 'JavaScript', 'Figma']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            My professional journey spans various roles and technologies, 
            each contributing to my growth as a versatile developer.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-background"></div>
                
                <div className="ml-20">
                  <div className="glass-card p-6 hover-glow transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-foreground/60 font-medium mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-16 glass-card p-8 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <p className="text-foreground/70">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
              <p className="text-foreground/70">Users Impacted</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">8</div>
              <p className="text-foreground/70">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
