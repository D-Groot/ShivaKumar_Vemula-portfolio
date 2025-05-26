
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from '@/components/ui/use-toast';
import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Connect = () => {
  const [activeTab, setActiveTab] = useState("contact");
  
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  });

  return (
    <div className="min-h-screen bg-portfolio-blue-dark">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl text-portfolio-text-secondary max-w-3xl text-center mb-8">
            I'm open to job opportunities, freelance work, and collaborative projects in AI and web development.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className="w-full mb-12"
          >
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
              <TabsTrigger value="contact">Contact Me</TabsTrigger>
              <TabsTrigger value="hire">Hire Me</TabsTrigger>
            </TabsList>
            
            <TabsContent value="contact" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1">
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <a href="mailto:contact@d-groot.dev" className="flex items-center space-x-3 p-4 glass-card hover:shadow-lg hover:shadow-portfolio-accent-primary/20 transition-all">
                      <Mail size={24} className="text-portfolio-accent-primary" />
                      <span>contact@d-groot.dev</span>
                    </a>
                    
                    <a href="tel:+1234567890" className="flex items-center space-x-3 p-4 glass-card hover:shadow-lg hover:shadow-portfolio-accent-primary/20 transition-all">
                      <Phone size={24} className="text-portfolio-accent-primary" />
                      <span>+1 (234) 567-890</span>
                    </a>
                    
                    <div className="flex justify-between p-4 glass-card">
                      <a href="https://github.com/d-groot" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-secondary hover:text-portfolio-accent-primary transition-colors">
                        <Github size={24} />
                      </a>
                      <a href="https://linkedin.com/in/d-groot" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-secondary hover:text-portfolio-accent-primary transition-colors">
                        <Linkedin size={24} />
                      </a>
                      <a href="https://twitter.com/d_groot_ai" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-secondary hover:text-portfolio-accent-primary transition-colors">
                        <Twitter size={24} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-1 md:col-span-2">
                  <Card className="glass-card">
                    <Form {...form}>
                      <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="Your email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="Subject" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Your message" 
                                  className="min-h-[120px]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit"
                          className="w-full bg-gradient-to-r from-portfolio-accent-primary to-portfolio-accent-secondary hover:opacity-90 transition-opacity"
                        >
                          Send Message
                        </Button>
                      </form>
                    </Form>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="hire" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-6 hover:shadow-lg hover:shadow-portfolio-accent-primary/20 transition-all">
                  <h3 className="text-xl font-bold mb-3">AI & ML Development</h3>
                  <p className="text-portfolio-text-secondary mb-6">
                    Expert in developing machine learning models, natural language processing systems, and computer vision applications for business needs.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-portfolio-text-secondary">
                      <span className="mr-2 text-portfolio-accent-primary">●</span>
                      Custom ML model development
                    </li>
                    <li className="flex items-center text-portfolio-text-secondary">
                      <span className="mr-2 text-portfolio-accent-primary">●</span>
                      NLP and text analysis solutions
                    </li>
                    <li className="flex items-center text-portfolio-text-secondary">
                      <span className="mr-2 text-portfolio-accent-primary">●</span>
                      Computer vision applications
                    </li>
                    <li className="flex items-center text-portfolio-text-secondary">
                      <span className="mr-2 text-portfolio-accent-primary">●</span>
                      AI integration with existing systems
                    </li>
                  </ul>
                  <Button className="w-full bg-portfolio-accent-primary hover:bg-portfolio-accent-primary/90">
                    Hire Me
                  </Button>
                </div>
                
                <div className="glass-card p-6 hover:shadow-lg hover:shadow-portfolio-accent-primary/20 transition-all">
                  <h3 className="text-xl font-bold mb-3">Web Development</h3>
                  <p className="text-portfolio-text-secondary mb-6">
                    Full-stack developer specializing in creating modern, responsive, and AI-enhanced web applications with React, Next.js, and Node.js.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-portfolio-text-secondary">
                      <span className="mr-2 text-portfolio-accent-secondary">●</span>
                      Full-stack web applications
                    </li>
                    <li className="flex items-center text-portfolio-text-secondary">
                      <span className="mr-2 text-portfolio-accent-secondary">●</span>
                      AI-powered web features
                    </li>
                    <li className="flex items-center text-portfolio-text-secondary">
                      <span className="mr-2 text-portfolio-accent-secondary">●</span>
                      Responsive and modern UI/UX
                    </li>
                    <li className="flex items-center text-portfolio-text-secondary">
                      <span className="mr-2 text-portfolio-accent-secondary">●</span>
                      API development and integration
                    </li>
                  </ul>
                  <Button className="w-full bg-portfolio-accent-secondary hover:bg-portfolio-accent-secondary/90">
                    Hire Me
                  </Button>
                </div>
                
                <div className="glass-card p-6 hover:shadow-lg hover:shadow-portfolio-accent-primary/20 transition-all">
                  <h3 className="text-xl font-bold mb-3">Prompt Engineering</h3>
                  <p className="text-portfolio-text-secondary mb-6">
                    Specialized prompt engineering for GPT models, ensuring optimal outputs for your specific business needs and use cases.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-portfolio-text-secondary">
                      <span className="mr-2 text-portfolio-accent-primary">●</span>
                      Custom prompt design
                    </li>
                    <li className="flex items-center text-portfolio-text-secondary">
                      <span className="mr-2 text-portfolio-accent-primary">●</span>
                      LLM output optimization
                    </li>
                    <li className="flex items-center text-portfolio-text-secondary">
                      <span className="mr-2 text-portfolio-accent-primary">●</span>
                      Task-specific prompt libraries
                    </li>
                    <li className="flex items-center text-portfolio-text-secondary">
                      <span className="mr-2 text-portfolio-accent-primary">●</span>
                      AI agent development
                    </li>
                  </ul>
                  <Button className="w-full bg-portfolio-accent-primary hover:bg-portfolio-accent-primary/90">
                    Hire Me
                  </Button>
                </div>
                
                <div className="glass-card p-6 hover:shadow-lg hover:shadow-portfolio-accent-primary/20 transition-all">
                  <h3 className="text-xl font-bold mb-3">Consulting & Training</h3>
                  <p className="text-portfolio-text-secondary mb-6">
                    Expert consultation on implementing AI solutions in your business, along with training programs for your team.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-portfolio-text-secondary">
                      <span className="mr-2 text-portfolio-accent-secondary">●</span>
                      AI strategy development
                    </li>
                    <li className="flex items-center text-portfolio-text-secondary">
                      <span className="mr-2 text-portfolio-accent-secondary">●</span>
                      Technical team training
                    </li>
                    <li className="flex items-center text-portfolio-text-secondary">
                      <span className="mr-2 text-portfolio-accent-secondary">●</span>
                      AI implementation roadmaps
                    </li>
                    <li className="flex items-center text-portfolio-text-secondary">
                      <span className="mr-2 text-portfolio-accent-secondary">●</span>
                      Technical due diligence
                    </li>
                  </ul>
                  <Button className="w-full bg-portfolio-accent-secondary hover:bg-portfolio-accent-secondary/90">
                    Hire Me
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Connect;
