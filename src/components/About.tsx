import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center"
          >
            About <span className="neon-text">Me</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                Reda is a creative, performance-driven Front-End Developer who builds modern, 
                responsive, and user-focused web & mobile applications. Skilled in React.js, 
                Next.js, React Native, TypeScript, Tailwind CSS, Sass, and Firebase — with 
                strong experience in UI libraries like MUI, DaisyUI, and shadcn/ui, and 
                expertise in API integration, state management, and performance optimization.
              </p>
              
              <p>
                He focuses on writing clean, scalable, accessible UI with smooth, elegant UX 
                interactions, and is passionate about continuous learning and real-world 
                impactful solutions.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
