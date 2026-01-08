const skills = [
  { name: "Django", level: 90 },
  { name: "React.js", level: 85 },
  { name: "REST APIs", level: 88 },
  { name: "Python", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "Docker", level: 70 },
  { name: "Git/GitHub", level: 85 },
  { name: "HTML/CSS", level: 90 },
  { name: "WordPress", level: 75 },
];

const certifications = [
  "Solidity Smart Contract Development",
  "Foundry Fundamentals",
  "Blockchain Basics",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skills.map((skill, index) => (
              <div key={skill.name} className="glass-card p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <span 
                  key={cert}
                  className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
