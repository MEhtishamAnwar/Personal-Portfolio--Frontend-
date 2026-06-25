import React from "react";
import { Award, Calendar, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Frontend Development",
    issuer: "Certified Program",
    date: "2026",
    description:
      "Completed practical training focused on responsive interfaces, component-based development, and modern frontend workflows.",
    skills: ["React", "JavaScript", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "JavaScript Essentials",
    issuer: "Certified Program",
    date: "2025",
    description:
      "Built a strong foundation in JavaScript fundamentals, DOM interaction, async logic, and clean application structure.",
    skills: ["JavaScript", "DOM", "APIs"],
    link: "#",
  },
  {
    title: "Web Design Fundamentals",
    issuer: "Certified Program",
    date: "2025",
    description:
      "Studied accessible layouts, visual hierarchy, responsive design systems, and polished user interface patterns.",
    skills: ["HTML", "CSS", "Responsive Design"],
    link: "#",
  },
];

const Certification = () => {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-highlight/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Certifications that
            <span className="font-serif italic font-normal text-white">
              {" "}
              sharpen my craft.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Professional learning milestones that support my work in frontend
            development, interface design, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((certification, idx) => (
            <article
              key={certification.title}
              className="group glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 120}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {certification.date}
                </span>
              </div>

              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {certification.title}
              </h3>
              <p className="text-sm text-secondary-foreground mt-1">
                {certification.issuer}
              </p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                {certification.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {certification.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-surface text-xs text-muted-foreground border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={certification.link}
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:text-foreground transition-colors"
              >
                View Credential
                <ExternalLink className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
