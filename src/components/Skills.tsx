import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Card } from "@mui/material";

const skillsData = [
  {
    category: "Frontend Frameworks",
    skills: ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript"],
  },
  {
    category: "UI Libraries & Styling",
    skills: ["Tailwind CSS", "Material UI", "shadcn/ui", "DaisyUI", "Sass"],
  },
  {
    category: "APIs & Authentication",
    skills: ["REST APIs", "Firebase Auth", "API Integration", "State Management"],
  },
  {
    category: "Performance & Tools",
    skills: ["Performance Optimization", "Responsive Design", "Accessibility", "Clean Code"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="skills" className="section-padding">
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
            Tech <span className="neon-text">Stack</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {skillsData.map((category, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card
                  className="glass-card p-6 md:p-8 h-full group hover:neon-glow transition-all duration-300"
                  sx={{
                    backgroundColor: "transparent",
                    backgroundImage: "none",
                  }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-accent">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-4 py-2 bg-secondary/50 rounded-lg text-sm font-medium backdrop-blur-sm border border-accent/20 group-hover:border-accent/40 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
