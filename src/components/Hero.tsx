import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const name = "Reda Salem".split(" ");
  const role = "Front-End Developer".split(" ");

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background with multiple layers */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, hsl(var(--accent) / 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, hsl(var(--accent) / 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, hsl(var(--accent) / 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Floating particles - more dynamic and cinematic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: `hsl(var(--accent) / ${Math.random() * 0.5 + 0.2})`,
            }}
            animate={{
              y: [0, -100 - Math.random() * 100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Flowing shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{ background: "hsl(var(--accent) / 0.2)" }}
          animate={{
            x: ["-25%", "125%"],
            y: ["0%", "50%", "0%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{ 
            background: "hsl(var(--accent) / 0.15)",
            right: 0,
            bottom: 0,
          }}
          animate={{
            x: ["25%", "-125%"],
            y: ["0%", "-50%", "0%"],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Sparkle icon */}
          <motion.div
            variants={wordVariants}
            className="mb-8 flex justify-center"
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-accent"
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>
          </motion.div>

          {/* Staggered name reveal */}
          <div className="mb-6">
            <div className="flex justify-center gap-4 mb-4">
              {name.map((word, i) => (
                <motion.h1
                  key={i}
                  variants={wordVariants}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold"
                >
                  {word}
                </motion.h1>
              ))}
            </div>
            
            {/* Staggered role reveal with neon */}
            <div className="flex justify-center gap-4">
              {role.map((word, i) => (
                <motion.h2
                  key={i}
                  variants={wordVariants}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold neon-text"
                >
                  {word}
                </motion.h2>
              ))}
            </div>
          </div>

          {/* Subtext - exact text as provided */}
          <motion.p
            variants={wordVariants}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Creative, performance-driven Front-End Developer who builds modern,
            responsive, and user-focused web & mobile applications
          </motion.p>

          {/* CTA Buttons with enhanced animations */}
          <motion.div
            variants={wordVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                onClick={handleScrollToContact}
                className="group relative overflow-hidden bg-accent text-accent-foreground hover:bg-accent/90 neon-glow px-10 py-7 text-lg font-semibold rounded-xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Let's Work Together
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="glass-card border-accent/50 hover:border-accent text-foreground hover:bg-accent/10 px-10 py-7 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator - enhanced */}
          <motion.div
            variants={wordVariants}
            className="mt-24"
          >
            <motion.div
              animate={{ 
                y: [0, 12, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-6 h-10 border-2 border-accent/60 rounded-full mx-auto flex items-start justify-center p-2"
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-accent rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
