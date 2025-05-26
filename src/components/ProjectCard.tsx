
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  liveUrl, 
  githubUrl,
  index
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Alternate card layouts for visual interest
  const isEven = index % 2 === 0;
  
  return (
    <Card 
      className={cn(
        "project-card border-portfolio-blue-light/20 overflow-hidden",
        "transform transition-all duration-500",
        isEven ? "lg:translate-y-4" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-card-content">
        <div className="relative overflow-hidden w-full h-56">
          <img 
            src={image} 
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-portfolio-blue-dark to-transparent opacity-60" />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          
          <p className="text-portfolio-text-secondary mb-4">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs bg-portfolio-blue-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-3">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                  className="bg-portfolio-accent-primary hover:bg-portfolio-accent-primary/90"
                  size="sm"
                >
                  Live Demo
                </Button>
              </a>
            )}
            
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-portfolio-accent-secondary text-portfolio-accent-secondary hover:bg-portfolio-accent-secondary/10"
                >
                  View Code
                </Button>
              </a>
            )}
            
            {!liveUrl && !githubUrl && (
              <Link to="/gallery">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-portfolio-accent-primary text-portfolio-accent-primary hover:bg-portfolio-accent-primary/10"
                >
                  Learn More
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
