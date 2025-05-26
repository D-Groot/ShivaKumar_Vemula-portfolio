
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';

const PageTransition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Show the transition when location changes
    setIsVisible(true);
    
    // Hide after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [location]);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-portfolio-blue-dark z-50 transition-opacity duration-300">
      <div className="animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="logo-animation"
        >
          <path
            d="M25,25 L75,25 L75,75 L25,75 Z"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeDasharray="200"
            strokeDashoffset="200"
            className="animate-dash"
          />
          <text
            x="50"
            y="54"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="url(#gradient)"
            className="text-xl font-bold font-serif animate-fade-in"
          >
            D-G
          </text>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#D946EF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default PageTransition;
