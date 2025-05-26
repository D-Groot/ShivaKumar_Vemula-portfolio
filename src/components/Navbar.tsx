
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/gallery' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Resume', href: '/resume' },
    { name: 'Hackathons', href: '/hackathons' },
    { name: 'Contact', href: '/connect' },
  ];
  
  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-portfolio-blue-dark/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold font-serif gradient-text">D-Groot</span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) => cn(
                "text-portfolio-text-secondary hover:text-white transition-colors",
                isActive && "text-portfolio-accent-primary"
              )}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/connect">
            <Button className="bg-gradient-to-r from-portfolio-accent-primary to-portfolio-accent-secondary hover:opacity-90 transition-opacity">
              Hire Me
            </Button>
          </NavLink>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-portfolio-text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-portfolio-blue-medium/90 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) => cn(
                  "text-portfolio-text-secondary hover:text-white transition-colors py-2",
                  isActive && "text-portfolio-accent-primary"
                )}
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/connect">
              <Button className="bg-gradient-to-r from-portfolio-accent-primary to-portfolio-accent-secondary hover:opacity-90 transition-opacity w-full">
                Hire Me
              </Button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
