import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="mailto:sethisarthak16@gmail.com"
              className="glass-card p-8 text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">sethisarthak16@gmail.com</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/sarthak-sethi-789a5b282"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Connect with me</p>
            </a>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">Germany</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect px-8"
              onClick={() => window.location.href = 'mailto:sethisarthak16@gmail.com'}
            >
              <Send className="w-4 h-4 mr-2" />
              Send me an email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
