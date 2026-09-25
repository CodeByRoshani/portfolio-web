import React from 'react';
import { portfolioData } from './data';
import { 
  ExternalLink, Mail, FileText, 
  Award, Briefcase, Database, GraduationCap, 
  Trophy, Terminal, Layers, CheckCircle, Code2, Sparkles, ArrowUpRight
} from 'lucide-react';

export default function App() {
  const { personal, skillCategories, education, internships, projects, certifications, achievements } = portfolioData;

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 to-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-[800px] -right-[200px] w-[500px] h-[350px] bg-purple-600/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Top Navbar */}
      <nav className="border-b border-slate-800/80 sticky top-0 bg-[#090d16]/80 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-mono tracking-tight">
              &lt;{personal.name.split(' ')[0]} /&gt;
            </span>
          </div>

          {/* Resume Button in Navbar */}
          <div className="flex items-center gap-3">
            <a 
              href="/ROSHANI_RESUME.pdf" 
              target="_blank" 
              rel="noreferrer" 
              download="ROSHANI_RESUME.pdf"
              className="flex items-center gap-2 text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium px-4 py-2 rounded-lg transition-all shadow-lg shadow-blue-500/20 active:scale-95"
            >
              <FileText size={15} /> Resume
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20 relative z-10">
        
        {/* Hero Section */}
        <section className="space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono backdrop-blur-sm">
            <Trophy size={14} className="text-amber-400" />
            <span>Branch Topper (Rank #1) • 9.60 CGPA</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-teal-300">{personal.name}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 font-medium tracking-tight">
              {personal.role}
            </p>
          </div>

          <p className="text-slate-400 max-w-2xl leading-relaxed text-base sm:text-lg font-normal">
            {personal.summary}
          </p>
          
          {/* Quick CTA & Social Links */}
          <div className="flex flex-wrap gap-3.5 pt-2">
            <a href={personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-sm hover:text-blue-400 transition-all active:scale-95">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>

            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-sm hover:text-blue-400 transition-all active:scale-95">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>

            <a href={`mailto:${personal.email}`} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-sm hover:text-blue-400 transition-all active:scale-95">
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <Database className="text-blue-400" size={22} /> Featured Projects
            </h2>
            <span className="text-xs font-mono text-slate-500">Live Deployments</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-slate-900/70 to-slate-950/70 border border-slate-800/90 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {proj.title}
                    </h3>
                    <div className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors" />
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{proj.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-800/80 text-blue-300 font-mono border border-slate-700/40">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-6 mt-auto border-t border-slate-800/60">
                  <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white font-medium transition-colors">
                    <Code2 size={14} /> Source
                  </a>
                  {proj.liveUrl && proj.liveUrl !== '#' && (
                    <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-medium transition-colors ml-auto">
                      Live App <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack Matrix */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800/80 pb-3 text-white">
            <Layers className="text-blue-400" size={22} /> Technical Skills Matrix
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3.5 font-mono flex items-center gap-2">
                  <Terminal size={14} className="text-blue-400" /> {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-800/90 hover:bg-slate-800 text-slate-200 rounded-lg text-xs font-medium border border-slate-700/50 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Internships */}
        {internships.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800/80 pb-3 text-white">
              <Briefcase className="text-blue-400" size={22} /> Experience & Internships
            </h2>
            <div className="space-y-5">
              {internships.map((exp, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3 relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <p className="text-sm font-medium text-blue-400">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-md">{exp.duration}</span>
                      {exp.certificateUrl && (
                        <a 
                          href={exp.certificateUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="flex items-center gap-1.5 text-xs bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-lg border border-blue-500/30 transition-all active:scale-95"
                        >
                          <ExternalLink size={12} /> Certificate
                        </a>
                      )}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-sm text-slate-300/90 pt-2">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education & Academic Record */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800/80 pb-3 text-white">
            <GraduationCap className="text-blue-400" size={22} /> Education & Academic Record
          </h2>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <p className="text-sm text-slate-400">{edu.institution}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs font-mono text-slate-500">{edu.duration}</span>
                    <div className="text-sm font-semibold text-amber-400 flex items-center sm:justify-end gap-1 font-mono">
                      <Trophy size={14} /> {edu.score}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/60">
                  <ul className="space-y-1.5 text-sm text-slate-300">
                    {edu.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        {point.includes("Branch Topper") ? (
                          <span className="inline-flex items-center gap-1.5 text-amber-300 font-medium bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded text-xs">
                            <Trophy size={12} className="text-amber-400" /> {point}
                          </span>
                        ) : (
                          <>
                            <span className="text-blue-400 font-bold">•</span>
                            <span className="text-slate-300/90">{point}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Key Highlights */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2 border-b border-slate-800/80 pb-3 text-white">
              <Award className="text-blue-400" size={20} /> Verified Credentials
            </h2>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-xl border flex justify-between items-center transition-all ${
                    cert.type === 'Academic' 
                      ? 'bg-amber-950/15 border-amber-800/40 hover:border-amber-700/60' 
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-white">{cert.name}</h3>
                      {cert.type === 'Academic' && (
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          Honor
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400">{cert.issuer} • {cert.year}</p>
                  </div>
                  {cert.verifyLink && (
                    <a 
                      href={cert.verifyLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 bg-slate-800/90 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/60 transition shrink-0 ml-3 active:scale-95"
                    >
                      <ExternalLink size={12} /> View
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2 border-b border-slate-800/80 pb-3 text-white">
              <CheckCircle className="text-blue-400" size={20} /> Key Highlights
            </h2>
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 h-full flex flex-col justify-start">
              <ul className="space-y-3.5 text-sm text-slate-300">
                {achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <Sparkles size={16} className="text-blue-400 shrink-0 mt-1" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500 font-mono relative z-10">
        Engineered with React, Tailwind CSS & Java Microservices • Roshani Kumari
      </footer>
    </div>
  );
}