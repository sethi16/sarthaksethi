import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bio */}
            <div className="glass-card p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a Computer Science student with a strong interest in full-stack web development 
                and building scalable, real-world applications. I work across the stack and bring 
                strong attention to detail, ensuring clean code, reliable functionality, and 
                maintainable systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My technical skill set includes Python, Django, RESTful APIs, HTML, CSS, JavaScript, 
                and WordPress. I have experience working with Docker for containerization and 
                understand CI/CD pipelines to automate testing, builds, and deployments.
              </p>
            </div>

            {/* Quick info */}
            <div className="space-y-4">
              <div className="glass-card p-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Germany</p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Education</p>
                  <p className="font-medium">BSc Computer Science</p>
                  <p className="text-sm text-muted-foreground">IU International University • 2025 - 2027</p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-medium">Open to Werkstudent roles</p>
                  <p className="text-sm text-muted-foreground">Remote or Hybrid</p>
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-8 glass-card p-8">
            <h3 className="text-xl font-semibold mb-6">Languages</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-secondary/30">
                <p className="font-medium">Hindi</p>
                <p className="text-sm text-muted-foreground">Native</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/30">
                <p className="font-medium">English</p>
                <p className="text-sm text-muted-foreground">Professional</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/30">
                <p className="font-medium">German</p>
                <p className="text-sm text-muted-foreground">Working</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
