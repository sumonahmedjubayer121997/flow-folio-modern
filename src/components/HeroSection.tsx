
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center px-4 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Alex Rivera</span>
          </h1>
          <div className="text-xl md:text-2xl text-foreground/80 mb-6 space-y-2">
            <p>Full Stack Developer</p>
            <div className="flex items-center justify-center space-x-4 text-lg">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span>DevOps Architect</span>
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              <span>Mobile App Engineer</span>
            </div>
          </div>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-8">
            Building innovative digital solutions with cutting-edge technologies. 
            Passionate about creating seamless user experiences and scalable architectures.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass-card px-8 py-4 rounded-full font-semibold hover-glow transition-all duration-300 hover:scale-105 animate-glow"
          >
            View My Work
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass-card px-8 py-4 rounded-full font-semibold hover-glow transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-500/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-500/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
