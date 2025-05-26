
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Trophy, Award, Medal } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Sample hackathon data
const hackathons = [
  {
    id: 1,
    name: "AI Innovators Hackathon",
    date: "March 2023",
    placement: "1st Place",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    description: "Created an AI-based accessibility tool that converts natural language to sign language in real-time using computer vision.",
    techStack: ["PyTorch", "OpenCV", "React", "WebRTC"],
    prize: "$5,000",
    link: "#"
  },
  {
    id: 2,
    name: "Global ML Challenge",
    date: "October 2022",
    placement: "2nd Place",
    icon: Award,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    description: "Developed a machine learning model that predicts agricultural yield based on satellite imagery, weather data, and soil conditions.",
    techStack: ["TensorFlow", "Python", "GCP", "Earth Engine API"],
    prize: "$3,000",
    link: "#"
  },
  {
    id: 3,
    name: "HackAI Conference",
    date: "January 2022",
    placement: "3rd Place",
    icon: Medal,
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    description: "Built a conversational AI that helps users learn new languages through adaptive, personalized conversation practice.",
    techStack: ["NLP", "BERT", "React Native", "Firebase"],
    prize: "$1,000",
    link: "#"
  },
  {
    id: 4,
    name: "Web3 Developer Challenge",
    date: "April 2022",
    placement: "Finalist",
    icon: Award,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    description: "Created a decentralized marketplace for AI models where developers can sell their trained models as NFTs.",
    techStack: ["Ethereum", "Solidity", "IPFS", "Next.js"],
    prize: "Honorable Mention",
    link: "#"
  },
  {
    id: 5,
    name: "Prompt Engineering Showcase",
    date: "September 2022",
    placement: "1st Place",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
    description: "Designed a system of prompts that enables GPT models to perform complex multi-step reasoning for medical diagnosis assistance.",
    techStack: ["GPT-4", "Python", "FastAPI", "React"],
    prize: "$2,500",
    link: "#"
  }
];

const Hackathons = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  return (
    <div className="min-h-screen bg-portfolio-blue-dark">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Hackathon <span className="gradient-text">Achievements</span>
          </h1>
          <p className="text-xl text-portfolio-text-secondary max-w-3xl text-center">
            A track record of innovation and success in competitive coding and AI challenges
          </p>
        </div>
        
        <div className="space-y-8">
          {hackathons.map((hackathon) => {
            const isExpanded = expandedId === hackathon.id;
            const Icon = hackathon.icon;
            
            return (
              <Card 
                key={hackathon.id}
                className={cn(
                  "overflow-hidden transition-all duration-500",
                  isExpanded ? "shadow-lg shadow-portfolio-accent-primary/20" : ""
                )}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                  <div className="md:col-span-1 relative h-48 md:h-full">
                    <img 
                      src={hackathon.image} 
                      alt={hackathon.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <Icon size={24} className="text-yellow-400" />
                      <span className="font-bold text-white">{hackathon.placement}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 md:col-span-2 lg:col-span-3">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <h3 className="text-2xl font-bold">{hackathon.name}</h3>
                      <span className="text-portfolio-text-secondary font-medium">{hackathon.date}</span>
                    </div>
                    
                    <p className="text-portfolio-text-secondary mb-4">
                      {hackathon.description}
                    </p>
                    
                    {isExpanded && (
                      <div className="mt-6 space-y-4 animate-fade-in">
                        <div>
                          <h4 className="text-lg font-bold mb-2">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {hackathon.techStack.map((tech) => (
                              <span 
                                key={tech} 
                                className="text-xs bg-portfolio-blue-medium px-3 py-1 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-bold mb-2">Prize</h4>
                          <p className="text-portfolio-accent-primary font-medium">{hackathon.prize}</p>
                        </div>
                        
                        <div className="pt-4">
                          <Button 
                            className="bg-portfolio-accent-primary hover:bg-portfolio-accent-primary/90"
                            size="sm"
                          >
                            View Project
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    <Button 
                      variant="link" 
                      onClick={() => toggleExpanded(hackathon.id)}
                      className="text-portfolio-accent-secondary px-0 mt-2"
                    >
                      {isExpanded ? "Show Less" : "Learn More"}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="glass-card p-6 mt-12">
          <h3 className="text-2xl font-bold mb-4">Hackathon Stats</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-portfolio-blue-medium/30 rounded-lg">
              <p className="text-3xl font-bold text-portfolio-accent-primary">12</p>
              <p className="text-sm text-portfolio-text-secondary">Hackathons</p>
            </div>
            
            <div className="text-center p-4 bg-portfolio-blue-medium/30 rounded-lg">
              <p className="text-3xl font-bold text-portfolio-accent-primary">5</p>
              <p className="text-sm text-portfolio-text-secondary">Wins</p>
            </div>
            
            <div className="text-center p-4 bg-portfolio-blue-medium/30 rounded-lg">
              <p className="text-3xl font-bold text-portfolio-accent-primary">3</p>
              <p className="text-sm text-portfolio-text-secondary">Runner-ups</p>
            </div>
            
            <div className="text-center p-4 bg-portfolio-blue-medium/30 rounded-lg">
              <p className="text-3xl font-bold text-yellow-400">$12K+</p>
              <p className="text-sm text-portfolio-text-secondary">Prize Money</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hackathons;
