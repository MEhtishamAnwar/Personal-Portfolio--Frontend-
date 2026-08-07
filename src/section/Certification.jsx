import React, { useState } from "react";
import { Award, Calendar, ExternalLink, ShieldCheck, Eye, X, Copy, Check } from "lucide-react";

const certifications = [
  {
    id: "meta-frontend",
    title: "Meta Front-End Developer",
    issuer: "Meta",
    issuerBadgeColor: "from-blue-600 to-cyan-500",
    badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    date: "Jul 19, 2026",
    credentialId: "XFF7XMYDOSJD",
    type: "Professional Certificate",
    description:
      "A 9-course professional program preparing for a career as a front-end developer. Mastered modern JavaScript, HTML/CSS in depth, React architecture, UI/UX principles, version control, and web app capstone.",
    skills: ["React", "JavaScript", "HTML & CSS", "UX/UI Design", "Git & GitHub"],
    link: "https://coursera.org/verify/professional-cert/XFF7XMYDOSJD",
    image: "/certificates/meta-frontend-developer.png",
  },
  {
    id: "ibm-backend",
    title: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM",
    issuerBadgeColor: "from-blue-700 to-indigo-600",
    badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    date: "Jul 18, 2026",
    credentialId: "RH9YKBM4T48S",
    type: "Course Certificate",
    description:
      "Comprehensive training in server-side JavaScript development using Node.js and Express. Covered RESTful APIs, asynchronous event loop, middleware integration, routing, and backend application structure.",
    skills: ["Node.js", "Express.js", "REST APIs", "Async JS", "Middleware"],
    link: "https://coursera.org/verify/RH9YKBM4T48S",
    image: "/certificates/ibm-backend-nodejs-express.png",
  },
  {
    id: "ibm-mongodb",
    title: "Node.js & MongoDB: Developing Back-end Database Applications",
    issuer: "IBM",
    issuerBadgeColor: "from-indigo-600 to-teal-500",
    badgeBg: "bg-teal-500/10 text-teal-400 border-teal-500/30",
    date: "Aug 1, 2026",
    credentialId: "6NTBE7V1XK7U",
    type: "Course Certificate",
    description:
      "Advanced back-end database application development. Focused on MongoDB NoSQL database integration, Mongoose schema modeling, CRUD operations, database indexing, and asynchronous persistence.",
    skills: ["Node.js", "MongoDB", "Mongoose", "NoSQL", "Database Design"],
    link: "https://coursera.org/verify/6NTBE7V1XK7U",
    image: "/certificates/ibm-nodejs-mongodb.png",
  },
];

const Certification = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
            <ShieldCheck className="w-4 h-4" /> Credentials & Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-foreground">
            Verified Professional
            <span className="font-serif italic font-normal text-primary">
              {" "}
              Certifications
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg animate-fade-in animation-delay-200 leading-relaxed">
            Official credentials from Meta and IBM validating industry-recognized expertise in modern Front-End Development, Node.js Back-End Engineering, and MongoDB Database Applications.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <article
              key={cert.id}
              className="group glass rounded-2xl border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:-translate-y-1.5 flex flex-col overflow-hidden animate-fade-in shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${(idx + 1) * 120}ms` }}
            >
              {/* Image Preview Banner */}
              <div 
                className="relative h-52 overflow-hidden bg-surface cursor-pointer group/img"
                onClick={() => setSelectedCert(cert)}
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover/img:opacity-60 transition-opacity" />
                
                {/* Issuer Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-md ${cert.badgeBg}`}>
                    {cert.issuer} Verified
                  </span>
                </div>

                {/* Hover Quick Zoom Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-[2px]">
                  <span className="px-4 py-2 bg-primary text-primary-foreground font-medium text-xs rounded-xl flex items-center gap-2 shadow-lg transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                    <Eye className="w-4 h-4" /> Preview Certificate
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-5">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground mb-2">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {cert.date}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-surface border border-border/60">
                      {cert.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-muted-foreground mt-2.5 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                <div>
                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md bg-surface text-[11px] text-foreground/80 border border-border/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential ID section */}
                  <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-muted-foreground font-mono">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70">ID:</span>
                      <span className="font-semibold text-foreground/90 select-all">{cert.credentialId}</span>
                    </div>

                    <button
                      onClick={() => handleCopy(cert.id, cert.credentialId)}
                      className="p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      title="Copy Credential ID"
                    >
                      {copiedId === cert.id ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* External Verify Link */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full mt-3 py-2.5 px-4 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground font-medium text-xs transition-all duration-300 border border-primary/30 hover:border-primary group/btn"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-4xl w-full glass border border-primary/30 rounded-2xl overflow-hidden shadow-2xl p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4 border-b border-border/50 pb-3">
              <div>
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">{selectedCert.issuer} Official Certificate</span>
                <h3 className="text-xl font-bold text-foreground">{selectedCert.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Image View */}
            <div className="relative max-h-[70vh] overflow-auto rounded-xl border border-border/40 bg-surface flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto object-contain rounded-lg max-h-[68vh]"
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-border/50 text-xs">
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground font-mono">Credential ID: <strong className="text-foreground">{selectedCert.credentialId}</strong></span>
                <span className="text-muted-foreground">Issued: <strong className="text-foreground">{selectedCert.date}</strong></span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleCopy(selectedCert.id, selectedCert.credentialId)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-foreground hover:bg-surface/80 transition-colors"
                >
                  {copiedId === selectedCert.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedId === selectedCert.id ? "Copied ID!" : "Copy ID"}
                </button>

                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Verify at Coursera <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certification;

