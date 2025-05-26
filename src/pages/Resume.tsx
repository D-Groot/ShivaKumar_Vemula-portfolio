
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('experience');
  
  return (
    <div className="min-h-screen bg-portfolio-blue-dark">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-xl text-portfolio-text-secondary max-w-3xl text-center mb-8">
            With experience in AI, machine learning, and web development, I bring a diverse skill set to create innovative solutions.
          </p>
          <Button className="flex items-center space-x-2 bg-portfolio-accent-primary hover:bg-portfolio-accent-primary/90">
            <Download size={18} />
            <span>Download CV</span>
          </Button>
        </div>
        
        <div className="glass-card p-8 mb-12">
          <div className="flex flex-wrap gap-4 mb-8 border-b border-portfolio-blue-light/20 pb-4">
            {['experience', 'education', 'certifications'].map((section) => (
              <Button 
                key={section} 
                variant={activeSection === section ? "default" : "outline"}
                className={cn(
                  activeSection === section 
                    ? "bg-portfolio-accent-primary hover:bg-portfolio-accent-primary/90" 
                    : "border-portfolio-accent-primary/30 text-portfolio-text-secondary hover:border-portfolio-accent-primary hover:text-white"
                )}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </div>
          
          {/* Experience Section */}
          {activeSection === 'experience' && (
            <div className="space-y-8">
              <div className="experience-item relative pl-8 border-l-2 border-portfolio-accent-primary">
                <div className="absolute top-0 left-[-10px] w-5 h-5 bg-portfolio-accent-primary rounded-full"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">ML Research Intern</h3>
                  <p className="text-portfolio-accent-secondary font-medium">AI Research Lab</p>
                  <p className="text-portfolio-text-secondary text-sm">Jan 2023 - Present</p>
                </div>
                <p className="text-portfolio-text-secondary mb-4">
                  Working on cutting-edge language models and generative AI applications. Developed optimization techniques that improved inference speed by 35%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-portfolio-blue-medium px-3 py-1 rounded-full">PyTorch</span>
                  <span className="text-xs bg-portfolio-blue-medium px-3 py-1 rounded-full">Transformers</span>
                  <span className="text-xs bg-portfolio-blue-medium px-3 py-1 rounded-full">CUDA</span>
                </div>
              </div>
              
              <div className="experience-item relative pl-8 border-l-2 border-portfolio-accent-secondary">
                <div className="absolute top-0 left-[-10px] w-5 h-5 bg-portfolio-accent-secondary rounded-full"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">Web Developer</h3>
                  <p className="text-portfolio-accent-primary font-medium">TechSolutions Inc.</p>
                  <p className="text-portfolio-text-secondary text-sm">Mar 2022 - Dec 2022</p>
                </div>
                <p className="text-portfolio-text-secondary mb-4">
                  Developed and maintained client websites using React and Next.js. Implemented AI-powered features including chatbots and recommendation systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-portfolio-blue-medium px-3 py-1 rounded-full">React</span>
                  <span className="text-xs bg-portfolio-blue-medium px-3 py-1 rounded-full">TypeScript</span>
                  <span className="text-xs bg-portfolio-blue-medium px-3 py-1 rounded-full">Node.js</span>
                </div>
              </div>
              
              <div className="experience-item relative pl-8 border-l-2 border-portfolio-blue-light/40">
                <div className="absolute top-0 left-[-10px] w-5 h-5 bg-portfolio-blue-light/40 rounded-full"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">Prompt Engineer (Freelance)</h3>
                  <p className="text-portfolio-accent-primary font-medium">Various Clients</p>
                  <p className="text-portfolio-text-secondary text-sm">2021 - Present</p>
                </div>
                <p className="text-portfolio-text-secondary mb-4">
                  Designed and optimized prompts for LLMs to create specialized AI tools for business applications. Increased AI output quality by 40% for clients.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-portfolio-blue-medium px-3 py-1 rounded-full">GPT-4</span>
                  <span className="text-xs bg-portfolio-blue-medium px-3 py-1 rounded-full">Claude</span>
                  <span className="text-xs bg-portfolio-blue-medium px-3 py-1 rounded-full">Prompt Optimization</span>
                </div>
              </div>
            </div>
          )}
          
          {/* Education Section */}
          {activeSection === 'education' && (
            <div className="space-y-8">
              <div className="education-item relative pl-8 border-l-2 border-portfolio-accent-primary">
                <div className="absolute top-0 left-[-10px] w-5 h-5 bg-portfolio-accent-primary rounded-full"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">MS in Computer Science, AI Specialization</h3>
                  <p className="text-portfolio-accent-secondary font-medium">Tech University</p>
                  <p className="text-portfolio-text-secondary text-sm">2021 - 2023</p>
                </div>
                <p className="text-portfolio-text-secondary">
                  Focused on machine learning algorithms, deep learning, and computer vision. Thesis on "Optimizing Transformer Models for Edge Devices."
                </p>
              </div>
              
              <div className="education-item relative pl-8 border-l-2 border-portfolio-accent-secondary">
                <div className="absolute top-0 left-[-10px] w-5 h-5 bg-portfolio-accent-secondary rounded-full"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">BS in Computer Science</h3>
                  <p className="text-portfolio-accent-primary font-medium">State University</p>
                  <p className="text-portfolio-text-secondary text-sm">2017 - 2021</p>
                </div>
                <p className="text-portfolio-text-secondary">
                  Graduated with honors. Specialized in software engineering with minor in mathematics. Completed research project on neural network optimization.
                </p>
              </div>
            </div>
          )}
          
          {/* Certifications Section */}
          {activeSection === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 hover:shadow-lg hover:shadow-portfolio-accent-primary/20 transition-all">
                <div className="flex items-start">
                  <FileText className="text-portfolio-accent-primary mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold">Deep Learning Specialization</h3>
                    <p className="text-portfolio-accent-secondary">DeepLearning.AI</p>
                    <p className="text-portfolio-text-secondary text-sm mt-2">
                      Comprehensive five-course specialization covering neural networks, optimization algorithms, and ML projects structuring.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 hover:shadow-lg hover:shadow-portfolio-accent-primary/20 transition-all">
                <div className="flex items-start">
                  <FileText className="text-portfolio-accent-primary mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold">TensorFlow Developer Certificate</h3>
                    <p className="text-portfolio-accent-secondary">Google</p>
                    <p className="text-portfolio-text-secondary text-sm mt-2">
                      Professional certification in building and training neural networks using TensorFlow.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 hover:shadow-lg hover:shadow-portfolio-accent-primary/20 transition-all">
                <div className="flex items-start">
                  <FileText className="text-portfolio-accent-primary mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold">Advanced React & Next.js</h3>
                    <p className="text-portfolio-accent-secondary">Frontend Masters</p>
                    <p className="text-portfolio-text-secondary text-sm mt-2">
                      Comprehensive course on building production-ready applications with React and Next.js.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 hover:shadow-lg hover:shadow-portfolio-accent-primary/20 transition-all">
                <div className="flex items-start">
                  <FileText className="text-portfolio-accent-primary mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold">Prompt Engineering for LLMs</h3>
                    <p className="text-portfolio-accent-secondary">AI Academy</p>
                    <p className="text-portfolio-text-secondary text-sm mt-2">
                      Specialized training in crafting optimal prompts for large language models in various business contexts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
