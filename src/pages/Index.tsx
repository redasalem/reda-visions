import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container-custom">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">© 2025 Reda Salem. All rights reserved.</p>
            <p className="text-sm">
              Built with React, TypeScript, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
