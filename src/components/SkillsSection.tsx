
import { useState, useEffect, useRef } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

// Sample skill data
const frontendSkills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "HTML/CSS", level: 92 },
  { name: "Three.js", level: 75 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind CSS", level: 95 },
];

const backendSkills = [
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "GraphQL", level: 75 },
  { name: "MongoDB", level: 85 },
  { name: "PostgreSQL", level: 70 },
  { name: "Express", level: 85 },
];

const otherSkills = [
  { name: "UI/UX", level: 80 },
  { name: "Git/GitHub", level: 90 },
  { name: "DevOps", level: 70 },
  { name: "Agile/Scrum", level: 85 },
  { name: "Testing", level: 75 },
];

// Chart data for pie chart
const pieChartData = [
  { name: "Frontend", value: 45 },
  { name: "Backend", value: 30 },
  { name: "Tools & Others", value: 25 },
];

const COLORS = ['#8B5CF6', '#4A6FA5', '#D946EF'];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="skills" className="section-container" ref={sectionRef}>
      <h2 className="section-title text-center">
        Technical <span className="gradient-text">Skills</span>
      </h2>
      <p className="section-subtitle text-center">
        A comprehensive overview of my technical expertise and experience
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Skill Distribution Chart */}
        <div className="glass-card p-6 lg:col-span-1">
          <h3 className="text-xl font-bold mb-4">Skill Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  animationDuration={2000}
                  animationBegin={isVisible ? 0 : 2000}
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Detailed Skills */}
        <div className="glass-card p-6 lg:col-span-2">
          <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
            
            <TabsContent value="frontend" className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-progress-bar">
                    <div 
                      className="skill-progress-bar-fill" 
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="backend" className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-progress-bar">
                    <div 
                      className="skill-progress-bar-fill" 
                      style={{ 
                        width: isVisible && activeTab === "backend" ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="other" className="space-y-6">
              {otherSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-progress-bar">
                    <div 
                      className="skill-progress-bar-fill" 
                      style={{ 
                        width: isVisible && activeTab === "other" ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Skill Comparison</h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={
                    activeTab === "frontend" 
                      ? frontendSkills 
                      : activeTab === "backend" 
                        ? backendSkills 
                        : otherSkills
                  }
                  layout="vertical"
                >
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip />
                  <Bar 
                    dataKey="level" 
                    fill="#8B5CF6" 
                    radius={[0, 4, 4, 0]}
                    animationBegin={isVisible ? 0 : 2000}
                    animationDuration={2000}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
