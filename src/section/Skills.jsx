import React from "react";
import { Code2, Database, Layout, Server, Sparkles, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Vite", "npm"],
  },
];

const highlights = [
  "Responsive UI development",
  "API integration",
  "Component-based architecture",
  "Clean and maintainable code",
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          <div className="max-w-2xl">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Technical Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Tools I use to
              <span className="font-serif italic font-normal text-white">
                {" "}
                build better web.
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              A focused set of technologies I use to design, develop, and ship
              fast, responsive, and user-friendly web applications.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {highlights.map((highlight, idx) => (
                <div
                  key={highlight}
                  className="glass px-4 py-3 rounded-2xl flex items-center gap-3 text-sm text-muted-foreground animate-fade-in"
                  style={{ animationDelay: `${(idx + 3) * 100}ms` }}
                >
                  <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skillGroups.map((group, idx) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="group glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 120}ms` }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full bg-surface text-xs font-medium text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="glass mt-10 p-5 rounded-2xl border border-primary/20 animate-fade-in animation-delay-500">
          <div className="flex items-center gap-3 text-secondary-foreground mb-4">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Current Focus
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {["React projects", "Modern UI systems", "Full-stack fundamentals"].map(
              (focus) => (
                <div
                  key={focus}
                  className="bg-surface/70 rounded-xl px-4 py-3 text-sm text-muted-foreground border border-border/50"
                >
                  {focus}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
