
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from '@/components/ui/card';
import { Image, GalleryHorizontal, GalleryVertical } from 'lucide-react';
import { cn } from '@/lib/utils';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Sample gallery data
const projects = [
  {
    id: 1,
    title: "AI Language Model Fine-tuning UI",
    description: "A web interface for fine-tuning language models on custom datasets",
    category: "ai",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    id: 2,
    title: "Neural Style Transfer App",
    description: "Web application that applies artistic styles to user images using CNN",
    category: "ai",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: 3,
    title: "Sentiment Analysis Dashboard",
    description: "Real-time sentiment analysis tool for social media monitoring",
    category: "ml",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    id: 4,
    title: "Recommendation Engine",
    description: "ML-powered content recommendation system for e-commerce",
    category: "ml",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    id: 5,
    title: "React Component Library",
    description: "Custom UI component library with interactive documentation",
    category: "web",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 6,
    title: "Portfolio Generator",
    description: "Tool that creates personalized portfolios from user data",
    category: "web",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 7,
    title: "GPT-3 Prompt Toolbox",
    description: "Collection of optimized prompts for various GPT applications",
    category: "prompt",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
  },
  {
    id: 8,
    title: "AI Character Creation System",
    description: "Framework for creating consistent AI personas for storytelling",
    category: "prompt",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }
    
    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-portfolio-blue-dark">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            My <span className="gradient-text">Work</span>
          </h1>
          <p className="text-xl text-portfolio-text-secondary max-w-3xl text-center mb-8">
            A showcase of my projects spanning AI, machine learning, prompt engineering, and web development
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Tabs 
            defaultValue="all" 
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="mb-4 md:mb-0"
          >
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="ai">AI</TabsTrigger>
              <TabsTrigger value="ml">Machine Learning</TabsTrigger>
              <TabsTrigger value="web">Web Dev</TabsTrigger>
              <TabsTrigger value="prompt">Prompt Engineering</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "border-portfolio-blue-light/30",
                viewMode === "grid" && "bg-portfolio-accent-primary/20 border-portfolio-accent-primary"
              )}
              onClick={() => setViewMode("grid")}
            >
              <GalleryHorizontal size={18} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "border-portfolio-blue-light/30",
                viewMode === "list" && "bg-portfolio-accent-primary/20 border-portfolio-accent-primary"
              )}
              onClick={() => setViewMode("list")}
            >
              <GalleryVertical size={18} />
            </Button>
          </div>
        </div>
        
        <div ref={galleryRef} className={cn(
          "transition-opacity duration-1000",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className="overflow-hidden hover:shadow-lg hover:shadow-portfolio-accent-primary/20 transition-all duration-300"
                  style={{
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-xs bg-portfolio-accent-primary px-2 py-1 rounded-full">
                        {project.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-portfolio-text-secondary text-sm mb-4">
                      {project.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-portfolio-accent-primary text-portfolio-accent-primary hover:bg-portfolio-accent-primary/10"
                      size="sm"
                    >
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className="overflow-hidden hover:shadow-lg hover:shadow-portfolio-accent-primary/20 transition-all duration-300"
                  style={{
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 h-48 md:h-auto relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent opacity-60 md:block hidden" />
                    </div>
                    <div className="p-6 md:w-3/4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <span className="text-xs bg-portfolio-accent-primary px-2 py-1 rounded-full">
                          {project.category.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-portfolio-text-secondary mb-4">
                        {project.description}
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-portfolio-accent-primary text-portfolio-accent-primary hover:bg-portfolio-accent-primary/10"
                        size="sm"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Image size={48} className="text-portfolio-accent-primary/50 mx-auto mb-4" />
              <p className="text-xl text-portfolio-text-secondary">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
