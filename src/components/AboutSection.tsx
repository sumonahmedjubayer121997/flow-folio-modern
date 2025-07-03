
import React from 'react';
import { Code, Server, Smartphone, Cloud } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Frontend Development',
      description: 'React, Vue.js, TypeScript, Next.js, Tailwind CSS',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Backend Development',
      description: 'Node.js, Python, PostgreSQL, MongoDB, GraphQL',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Development',
      description: 'React Native, Flutter, iOS/Android Native',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'DevOps & Cloud',
      description: 'AWS, Docker, Kubernetes, CI/CD, Terraform',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with over 8 years of experience building 
            scalable web applications, mobile apps, and cloud infrastructure. I love turning 
            complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card p-6 hover-glow transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4`}>
                <div className="text-white">
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-foreground/70 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
              <p className="text-foreground/80 mb-4">
                Started as a curious computer science student, I've evolved into a versatile 
                engineer who bridges the gap between design and functionality. My experience 
                spans from startups to enterprise-level projects.
              </p>
              <p className="text-foreground/80">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge through tech talks and mentoring.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">JavaScript/TypeScript</span>
                <span className="text-sm text-foreground/70">95%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: '95%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-medium">React/Next.js</span>
                <span className="text-sm text-foreground/70">90%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" style={{ width: '90%' }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium">Cloud Architecture</span>
                <span className="text-sm text-foreground/70">85%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
