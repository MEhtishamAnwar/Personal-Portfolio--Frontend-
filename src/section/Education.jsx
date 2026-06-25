import React from "react";
import { BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react";

const educationItems = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "Abbottabad University of science and technology",
    location: "Abbottabad,Pakistan",
    period: "2022 - 2026",
    description:
      "Studying software development, data structures, databases, and modern web technologies with a focus on building practical applications.",
    subjects: ["Programming", "Web Development", "Databases", "Software Engineering"],
  },
  {
    degree: "Intermediate in Computer Science",
    institution: "The Hallmark School and College Havelian",
    location: "Havelian,Abbottabad",
    period: "2020 - 2022",
    description:
      "Built a strong academic foundation in computer science, mathematics, and problem-solving before moving into professional web development.",
    subjects: ["Computer Science", "Mathematics", "Physics"],
  },
  {
    degree: "Matriculation",
    institution: "The Hallmark School and College Havelia",
    location: "Havelian,Abbottabad",
    period: "2018 - 2020",
    description:
      "Completed secondary education with a focus on science subjects and developed early interest in technology and digital products.",
    subjects: ["Science", "Mathematics", "Computer Basics"],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Education that
            <span className="font-serif italic font-normal text-white">
              {" "}
              shaped my path.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A quick look at the academic foundation behind my software
            development journey and technical growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <div className="glass p-8 rounded-2xl border border-primary/20 animate-fade-in animation-delay-200">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-secondary-foreground">
              Learning by building
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              My education supports the practical projects I build, from
              frontend interfaces to backend logic and database-driven
              applications.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-surface/70 rounded-2xl p-4 border border-border/50">
                <div className="text-3xl font-bold text-primary">3+</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Academic stages
                </p>
              </div>
              <div className="bg-surface/70 rounded-2xl p-4 border border-border/50">
                <div className="text-3xl font-bold text-primary">6+</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Core subjects
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {educationItems.map((item, idx) => (
              <article
                key={item.degree}
                className="group glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 140}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-secondary-foreground mt-1">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-3 md:gap-2 text-sm text-muted-foreground md:text-right">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-5 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {item.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1 rounded-full bg-surface text-xs text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
