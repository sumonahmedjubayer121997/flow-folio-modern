
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: 'github' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'Email', href: 'mailto:alex.rivera@email.com', icon: 'email' }
  ];

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card p-8 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Alex Rivera</span>
            </h3>
            <p className="text-foreground/70 max-w-md mx-auto">
              Full Stack Developer passionate about creating innovative solutions 
              and building the future of technology.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="p-3 glass-card rounded-full hover-glow transition-all duration-300 hover:scale-110"
                aria-label={link.name}
              >
                <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-foreground/60 text-sm">
              © {currentYear} Alex Rivera. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
