import React from 'react';
import { ArrowUp } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack marketplace with real-time inventory, payment processing, and admin dashboard.',
      image: '/placeholder.svg',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team collaboration features.',
      image: '/placeholder.svg',
      tech: ['Next.js', 'Prisma', 'WebSocket', 'Tailwind'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather app with location-based forecasts and interactive maps.',
      image: '/placeholder.svg',
      tech: ['React Native', 'TypeScript', 'OpenWeather API'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'DevOps Dashboard',
      description: 'Monitoring dashboard for containerized applications with metrics and alerts.',
      image: '/placeholder.svg',
      tech: ['Vue.js', 'Docker', 'Kubernetes', 'Prometheus'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'AI Chat Bot',
      description: 'Intelligent chatbot with natural language processing and learning capabilities.',
      image: '/placeholder.svg',
      tech: ['Python', 'TensorFlow', 'Flask', 'React'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics platform for social media performance tracking and insights.',
      image: '/placeholder.svg',
      tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating 
            innovative solutions across different technologies and domains.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden hover-glow transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors"
                  >
                    Code <ArrowUp className="h-4 w-4 rotate-45" />
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors"
                  >
                    Live Demo <ArrowUp className="h-4 w-4 rotate-45" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="glass-card p-6 hover-glow transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <h4 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium bg-purple-500/20 text-purple-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-xs font-medium hover:text-blue-400 transition-colors"
                  >
                    Code <ArrowUp className="h-3 w-3 rotate-45" />
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-1 text-xs font-medium hover:text-blue-400 transition-colors"
                  >
                    Demo <ArrowUp className="h-3 w-3 rotate-45" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
