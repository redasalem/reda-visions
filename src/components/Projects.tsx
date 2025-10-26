import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@mui/material";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import weatherImg from "@/assets/project-weather.jpg";
import taskImg from "@/assets/project-task.jpg";
import socialImg from "@/assets/project-social.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";
import realestateImg from "@/assets/project-realestate.jpg";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  details: string;
}

const projectsData: Project[] = [
  {
    title: "E-Commerce Dashboard",
    description: "Modern e-commerce analytics platform with real-time data visualization",
    image: ecommerceImg,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    details: "A comprehensive e-commerce dashboard featuring real-time analytics, inventory management, and sales tracking. Built with performance optimization in mind, utilizing React Query for efficient data fetching and state management.",
  },
  {
    title: "Weather Application",
    description: "Sleek weather app with animated UI and location-based forecasts",
    image: weatherImg,
    technologies: ["React Native", "TypeScript", "OpenWeather API"],
    details: "Cross-platform weather application with beautiful animations and accurate forecasts. Features include location-based weather, 7-day forecasts, and weather alerts with smooth transitions and glassmorphism design.",
  },
  {
    title: "Task Management",
    description: "Intuitive kanban-style task manager with drag-and-drop functionality",
    image: taskImg,
    technologies: ["Next.js", "Firebase", "Material UI"],
    details: "Full-featured task management application with real-time collaboration, drag-and-drop kanban boards, and Firebase backend. Includes user authentication, team workspaces, and notification system.",
  },
  {
    title: "Social Media Platform",
    description: "Modern social platform with real-time messaging and content sharing",
    image: socialImg,
    technologies: ["React", "Firebase", "Tailwind CSS"],
    details: "Feature-rich social media platform with real-time messaging, post creation, likes, comments, and user profiles. Implements Firebase for authentication and real-time database synchronization.",
  },
  {
    title: "Portfolio Template",
    description: "Elegant portfolio website with smooth animations and modern design",
    image: portfolioImg,
    technologies: ["Next.js", "Framer Motion", "shadcn/ui"],
    details: "Premium portfolio template featuring cinematic animations, dark mode support, and responsive design. Built with Next.js for optimal performance and SEO, with Framer Motion for fluid animations.",
  },
  {
    title: "Real Estate Listing",
    description: "Property listing platform with interactive maps and search filters",
    image: realestateImg,
    technologies: ["React", "Google Maps API", "Material UI"],
    details: "Comprehensive real estate platform with advanced search filters, interactive maps, virtual tours, and property comparison tools. Integrates with Google Maps API for location services and property visualization.",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center"
          >
            Featured <span className="neon-text">Projects</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card
                  onClick={() => setSelectedProject(project)}
                  className="glass-card overflow-hidden cursor-pointer group h-full hover:neon-glow transition-all duration-300"
                  sx={{
                    backgroundColor: "transparent",
                    backgroundImage: "none",
                  }}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glass-card max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold mb-4">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {selectedProject.details}
                </p>

                <div>
                  <h4 className="text-xl font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-accent/10 text-accent rounded-lg border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {selectedProject.liveUrl && (
                    <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button variant="outline" className="flex-1 border-accent/50">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
