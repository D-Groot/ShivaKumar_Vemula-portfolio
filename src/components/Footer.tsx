
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-blue-dark border-t border-portfolio-blue-light/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold font-serif mb-4">D-Groot</h3>
            <p className="text-portfolio-text-secondary mb-4">
              AI enthusiast, machine learning engineer, prompt engineer, and web developer creating innovative solutions at the intersection of AI and web technologies.
            </p>
            <p className="text-portfolio-text-secondary">
              &copy; {currentYear} D-Groot. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-portfolio-text-secondary hover:text-portfolio-accent-primary transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="text-portfolio-text-secondary hover:text-portfolio-accent-primary transition-colors">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/resume" className="text-portfolio-text-secondary hover:text-portfolio-accent-primary transition-colors">
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink to="/hackathons" className="text-portfolio-text-secondary hover:text-portfolio-accent-primary transition-colors">
                  Hackathons
                </NavLink>
              </li>
              <li>
                <NavLink to="/connect" className="text-portfolio-text-secondary hover:text-portfolio-accent-primary transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'PyTorch', 'TensorFlow', 'Three.js', 'NLP'].map((tech) => (
                <span 
                  key={tech}
                  className="text-xs bg-portfolio-blue-medium px-3 py-1 rounded-full text-portfolio-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-portfolio-blue-light/20 text-center">
          <p className="text-portfolio-text-secondary text-sm">
            Designed and built with passion for AI and web development
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
