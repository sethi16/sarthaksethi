import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-muted-foreground">Open to opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Hi, I'm{" "}
            <span className="gradient-text">Sarthak Sethi</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Full-Stack Developer
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Building scalable web applications with React & Django. 
            Passionate about clean code and delivering exceptional user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border/50 bg-secondary/30 hover:bg-secondary/50"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a 
              href="https://www.linkedin.com/in/sarthak-sethi-789a5b282" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border/50 hover:bg-secondary hover:border-primary/50 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border/50 hover:bg-secondary hover:border-primary/50 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a 
              href="mailto:sethisarthak16@gmail.com"
              className="p-3 rounded-full bg-secondary/50 border border-border/50 hover:bg-secondary hover:border-primary/50 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ArrowDown className="w-6 h-6 text-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
