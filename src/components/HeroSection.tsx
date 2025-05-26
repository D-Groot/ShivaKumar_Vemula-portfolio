
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Load Three.js dynamically to avoid SSR issues
    import('three').then(({ Scene, PerspectiveCamera, WebGLRenderer, TorusGeometry, MeshStandardMaterial, Mesh, DirectionalLight, AmbientLight, SphereGeometry, BoxGeometry, Color }) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Scene setup
      const scene = new Scene();
      scene.background = new Color('#1A1F2C');
      
      // Camera setup
      const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 30;
      
      // Renderer setup
      const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      // Lighting
      const ambientLight = new AmbientLight(0x404040, 2);
      scene.add(ambientLight);
      
      const directionalLight = new DirectionalLight(0xffffff, 2);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);
      
      // Create objects - these will be our visual elements
      const geometries = [];
      
      // Main torus
      const torusGeometry = new TorusGeometry(10, 3, 16, 100);
      const torusMaterial = new MeshStandardMaterial({ 
        color: 0x8B5CF6,
        roughness: 0.5,
        metalness: 0.7,
      });
      const torus = new Mesh(torusGeometry, torusMaterial);
      scene.add(torus);
      geometries.push(torus);
      
      // Smaller sphere objects
      for (let i = 0; i < 30; i++) {
        const geometry = new SphereGeometry(0.4, 24, 24);
        const material = new MeshStandardMaterial({ 
          color: i % 2 === 0 ? 0x8B5CF6 : 0xD946EF,
          roughness: 0.3, 
          metalness: 0.8 
        });
        const sphere = new Mesh(geometry, material);
        
        // Position randomly around the torus
        const radius = 15 + Math.random() * 8;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 2;
        
        sphere.position.x = radius * Math.sin(theta) * Math.cos(phi);
        sphere.position.y = radius * Math.sin(theta) * Math.sin(phi);
        sphere.position.z = radius * Math.cos(theta);
        
        scene.add(sphere);
        geometries.push(sphere);
      }
      
      // Add some cubic particles
      for (let i = 0; i < 15; i++) {
        const size = 0.6 + Math.random() * 0.8;
        const geometry = new BoxGeometry(size, size, size);
        const material = new MeshStandardMaterial({ 
          color: 0x4A6FA5,
          roughness: 0.5, 
          metalness: 0.7 
        });
        const cube = new Mesh(geometry, material);
        
        // Position randomly
        const radius = 18 + Math.random() * 7;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 2;
        
        cube.position.x = radius * Math.sin(theta) * Math.cos(phi);
        cube.position.y = radius * Math.sin(theta) * Math.sin(phi);
        cube.position.z = radius * Math.cos(theta);
        
        cube.rotation.x = Math.random() * Math.PI;
        cube.rotation.y = Math.random() * Math.PI;
        cube.rotation.z = Math.random() * Math.PI;
        
        scene.add(cube);
        geometries.push(cube);
      }
      
      // Mouse movement effect
      let mouseX = 0;
      let mouseY = 0;
      
      document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      });
      
      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        
        // Rotate main torus
        torus.rotation.x += 0.003;
        torus.rotation.y += 0.005;
        
        // Make the scene respond subtly to mouse movement
        scene.rotation.x = mouseY * 0.05;
        scene.rotation.y = mouseX * 0.05;
        
        // Animate all geometries
        geometries.forEach((geo, i) => {
          if (i > 0) { // Skip the main torus
            geo.rotation.x += 0.003 + (i % 5) * 0.001;
            geo.rotation.y += 0.005 + (i % 3) * 0.001;
          }
        });
        
        renderer.render(scene, camera);
      };
      
      animate();
      
      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
        scene.clear();
        renderer.dispose();
      };
    }).catch(error => {
      console.error("Error loading Three.js:", error);
    });
    
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <canvas ref={canvasRef} className="hero-3d-canvas" />
      
      <div className="container mx-auto px-4 text-center relative z-10 mt-16">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6">
            Creative <span className="gradient-text">Developer</span> <br />
            Building Digital Experiences
          </h1>
          
          <p className="text-xl md:text-2xl text-portfolio-text-secondary max-w-3xl mx-auto mb-12">
            Transforming ideas into interactive realities through code,
            design, and cutting-edge web technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-gradient-to-r from-portfolio-accent-primary to-portfolio-accent-secondary hover:opacity-90 transition-opacity text-white px-8 py-6 text-lg">
              View Projects
            </Button>
            <Button variant="outline" className="border-portfolio-accent-primary text-white hover:bg-portfolio-accent-primary/10 px-8 py-6 text-lg">
              Contact Me
            </Button>
          </div>
          
          <div className="mt-16 animate-bounce">
            <a href="#projects" className="text-portfolio-text-secondary hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
              <span className="sr-only">Scroll down</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
