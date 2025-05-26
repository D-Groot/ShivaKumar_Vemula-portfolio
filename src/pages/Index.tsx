
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectShowcase from '@/components/ProjectShowcase';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Dynamically load three.js when the component mounts
    import('three').catch(err => {
      console.error('Failed to load Three.js:', err);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for navbar
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);
  
  return (
    <div className="min-h-screen bg-portfolio-blue-dark">
      <Navbar />
      <HeroSection />
      <div className="relative z-10">
        <ProjectShowcase />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
