import { Calendar, Building2 } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {/* Experience item 1 */}
            <div className="relative pl-8 md:pl-0 md:w-1/2 md:pr-12 mb-12">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 w-4 h-4 rounded-full bg-primary glow-effect md:translate-x-1/2 -translate-x-1/2" />
              
              <div className="glass-card p-8">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Building2 className="w-4 h-4" />
                  <span className="font-semibold">Think3DDD</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">Django Developer</h3>
                
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>October 2025 - December 2025 • 3 months</span>
                </div>
                
                <p className="text-muted-foreground">
                  Developed and maintained Django-based web applications in Germany. 
                  Worked on backend logic, API development, and collaborated with the 
                  team to deliver production-ready solutions.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["Django", "Python", "REST APIs", "Backend"].map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience item 2 */}
            <div className="relative pl-8 md:pl-0 md:ml-auto md:w-1/2 md:pl-12 md:pr-0">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-0 w-4 h-4 rounded-full bg-primary glow-effect -translate-x-1/2" />
              
              <div className="glass-card p-8">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Building2 className="w-4 h-4" />
                  <span className="font-semibold">Personal Project</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">Expense Tracker with AI Chatbot</h3>
                
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>October 2025 - Ongoing</span>
                </div>
                
                <p className="text-muted-foreground">
                  Developed a comprehensive expense tracker with automated daily email summaries and 
                  ChatGPT-based chatbot for personalized financial recommendations. Led development 
                  independently with Docker containerization and CI/CD pipelines.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["React", "Node.js", "ChatGPT", "Docker", "CI/CD", "Email Automation"].map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Looking for more */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-secondary/50 border border-border/50">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-muted-foreground">
                Currently seeking <span className="text-foreground font-medium">Werkstudent</span> opportunities in Germany
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
