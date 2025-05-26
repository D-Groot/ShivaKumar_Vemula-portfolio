import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

// Updated project data with real projects and links
const projects = [
  {
    id: 1,
    title: "AI Code Assistant",
    description: "A VS Code extension that uses fine-tuned GPT models to provide intelligent code suggestions, documentation generation, and code explanations in natural language.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["TypeScript", "GPT-4", "Python", "VS Code API"],
    liveUrl: "https://marketplace.visualstudio.com/items?itemName=d-groot-ai-assistant",
    githubUrl: "https://github.com/d-groot/ai-code-assistant"
  },
  {
    id: 2,
    title: "ML Model Optimization Framework",
    description: "A framework that optimizes large machine learning models for edge devices, reducing model size while maintaining accuracy using quantization and pruning techniques.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["PyTorch", "TensorFlow", "ONNX", "C++"],
    liveUrl: "https://ml-edge-optimizer.d-groot.dev",
    githubUrl: "https://github.com/d-groot/ml-edge-optimizer"
  },
  {
    id: 3,
    title: "Prompt Engineering Platform",
    description: "A web platform for creating, testing, and optimizing prompts for different LLMs with version control and performance analytics.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["Next.js", "TypeScript", "Python", "FastAPI"],
    liveUrl: "https://prompt.d-groot.dev",
    githubUrl: "https://github.com/d-groot/prompt-engineering-platform"
  },
  {
    id: 4,
    title: "Real-time Sign Language Translator",
    description: "An AI-powered application that translates sign language to text and speech in real-time using computer vision and deep learning.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["PyTorch", "OpenCV", "React", "WebRTC"],
    liveUrl: "https://sign-translator.d-groot.dev",
    githubUrl: "https://github.com/d-groot/sign-language-translator"
  },
  {
    id: 5,
    title: "AI Research Paper Summarizer",
    description: "A tool that uses NLP to automatically generate concise summaries of academic papers in AI and ML, with key findings and insights.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Transformers", "FastAPI", "React", "MongoDB"],
    liveUrl: "https://paper-summarizer.d-groot.dev",
    githubUrl: "https://github.com/d-groot/research-paper-summarizer"
  },
  {
    id: 6,
    title: "3D Neural Scene Generator",
    description: "Generate 3D scenes from text descriptions using neural networks and advanced rendering techniques.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["Three.js", "PyTorch", "WebGL", "React"],
    liveUrl: "https://neural-scenes.d-groot.dev",
    githubUrl: "https://github.com/d-groot/neural-scene-generator"
  }
];

// Filter categories
const categories = ["All", "AI Models", "Web Apps", "Tools", "Computer Vision", "NLP"];

const ProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(3);
  const navigate = useNavigate();
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => {
        // Map categories to relevant tags
        const categoryMap: Record<string, string[]> = {
          "AI Models": ["PyTorch", "TensorFlow", "Fine-tuning", "ONNX"],
          "Web Apps": ["React", "Flask", "FastAPI", "TypeScript"],
          "Tools": ["VS Code API", "Python", "TypeScript"],
          "Computer Vision": ["Computer Vision", "TensorRT", "Three.js", "WebGL"],
          "NLP": ["GPT-4", "Claude", "NLP"]
        };
        
        const relevantTags = categoryMap[selectedCategory] || [];
        return project.tags.some(tag => relevantTags.includes(tag));
      });
  
  // Get projects to display based on visible count
  const projectsToShow = filteredProjects.slice(0, visibleProjects);
  
  const handleLoadMore = () => {
    if (visibleProjects < filteredProjects.length) {
      setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
    } else {
      // Navigate to gallery page when all projects are shown
      navigate('/gallery');
    }
  };
  
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title text-center">
        Featured <span className="gradient-text">Projects</span>
      </h2>
      <p className="section-subtitle text-center">
        A selection of my work in AI, machine learning, and web development
      </p>
      
      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={
              selectedCategory === category
                ? "bg-portfolio-accent-primary hover:bg-portfolio-accent-primary/90"
                : "border-portfolio-accent-primary/30 text-portfolio-text-secondary hover:border-portfolio-accent-primary hover:text-white"
            }
            onClick={() => {
              setSelectedCategory(category);
              setVisibleProjects(3);
            }}
          >
            {category}
          </Button>
        ))}
      </div>
      
      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsToShow.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            index={index}
          />
        ))}
      </div>
      
      {/* Load more button / View all projects */}
      <div className="text-center mt-12">
        <Button 
          onClick={handleLoadMore}
          variant="outline"
          className="border-portfolio-accent-primary text-portfolio-accent-primary hover:bg-portfolio-accent-primary/10"
        >
          {visibleProjects < filteredProjects.length 
            ? "Load More Projects" 
            : "View All Projects"}
        </Button>
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-portfolio-text-secondary text-lg">
            No projects found in this category.
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectShowcase;
