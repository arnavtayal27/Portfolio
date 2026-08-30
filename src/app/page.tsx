"use client";

import { useState, useEffect } from 'react';
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { caseStudies } from "@/data/projects";
import { technicalArsenal } from "@/data/skills";
import { motion, Variants } from "framer-motion";
import { Terminal } from 'lucide-react';
import { CountUp } from "@/components/CountUp";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '~' || e.key === '`') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#fafbfc] overflow-hidden selection:bg-cyan-100">
      
      {/* ENGINEERING GRID BACKGROUND (Light Mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]" 
           style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32 relative z-10">
        
        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center bg-white/80 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm">
          <div className="font-mono font-bold text-slate-900 tracking-widest text-lg">AT</div>
          <div className="hidden md:flex gap-8 text-sm text-slate-500 font-medium">
            <a href="#engineering" className="hover:text-cyan-600 transition-colors">Engineering</a>
            <a href="#projects" className="hover:text-cyan-600 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-600 transition-colors">Experience</a>
            <a href="#stack" className="hover:text-cyan-600 transition-colors">Stack</a>
          </div>
          <a href="#contact" className="text-sm font-semibold text-cyan-600 hover:text-cyan-700">Contact</a>
        </nav>

        {/* HERO SECTION */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-40 mt-12"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            {profile.name}
          </motion.h1>
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl text-cyan-600 font-semibold mb-8">
            {profile.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-slate-600 max-w-2xl leading-relaxed mb-12">
            {profile.headline}
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <a href="#engineering" className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:scale-105 hover:bg-slate-800 transition-all shadow-md">
              Explore My Engineering
            </a>
            <a href="#contact" className="px-6 py-3 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:border-cyan-600 hover:text-cyan-700 transition-all shadow-sm">
              Let's Talk
            </a>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-3 text-sm text-slate-500 font-mono">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Open to Cloud & DevOps opportunities
          </motion.div>
        </motion.section>

        {/* ENGINEERING IMPACT */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          id="engineering" className="mb-40"
        >
          <h3 className="text-sm font-mono text-cyan-600 uppercase tracking-widest mb-12 flex items-center gap-4 font-semibold">
            <span className="w-8 h-px bg-cyan-600"></span> 01 — Engineering Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden p-8 bg-white border border-slate-200 shadow-sm hover:shadow-md rounded-2xl transition-all col-span-1 md:col-span-2 group">
              <div className="text-7xl font-extrabold text-slate-900 mb-4 tracking-tighter">
                <CountUp to={80} suffix="%" />
              </div>
              <div className="text-cyan-700 font-semibold mb-2 text-xl">Docker image-size reduction</div>
              <div className="text-slate-600 leading-relaxed">Across 8+ microservices through multi-stage builds. Lower image size → lower storage → lower transfer → lower deployment overhead.</div>
            </div>
            <div className="relative overflow-hidden p-8 bg-white border border-slate-200 shadow-sm hover:shadow-md rounded-2xl transition-all group">
              <div className="text-7xl font-extrabold text-slate-900 mb-4 tracking-tighter">
                <CountUp to={4} duration={1} />
              </div>
              <div className="text-cyan-700 font-semibold mb-2 text-xl">Environments</div>
              <div className="text-slate-600 leading-relaxed">Dev, QA, Pre-Prod, and Prod automation across 8+ repositories.</div>
            </div>
          </div>
        </motion.section>

        {/* HOW I BUILD */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="mb-40"
        >
          <motion.h3 variants={fadeInUp} className="text-sm font-mono text-cyan-600 uppercase tracking-widest mb-12 flex items-center gap-4 font-semibold">
            <span className="w-8 h-px bg-cyan-600"></span> 02 — How I Build
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { title: "Automate repetitive work", desc: "If a task is done more than twice, it gets a script, a pipeline, or a Lambda function. Human error is the enemy of reliability." },
              { title: "Optimize infrastructure cost", desc: "Cloud resources should scale with demand, not default allocations. Visibility through automated intelligence is step one." },
              { title: "Secure credentials & secrets", desc: "Secrets belong in Key Vaults and Secrets Managers, injected at runtime, never hardcoded or manually distributed." },
              { title: "Design for predictability", desc: "Deployments should be boring. GitOps methodologies ensure the desired state in Kubernetes always matches the repository." }
            ].map((principle, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group cursor-default">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-200 border-2 border-cyan-600 group-hover:bg-cyan-500 group-hover:scale-150 transition-all duration-300"></div>
                  <h4 className="text-xl text-slate-900 font-bold">{principle.title}</h4>
                </div>
                <p className="text-slate-600 leading-relaxed pl-6 border-l-2 border-slate-100">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ENGINEERING CASE STUDIES */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          id="projects" className="mb-40"
        >
          <motion.h3 variants={fadeInUp} className="text-sm font-mono text-cyan-600 uppercase tracking-widest mb-12 flex items-center gap-4 font-semibold">
            <span className="w-8 h-px bg-cyan-600"></span> 03 — Case Studies
          </motion.h3>
          <div className="space-y-12">
            {caseStudies.map((study, idx) => (
              <motion.div variants={fadeInUp} key={study.slug} className="group bg-white border border-slate-200 rounded-2xl p-8 hover:border-cyan-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-8 pb-6 border-b border-slate-100">
                  <h4 className="text-2xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">{study.title}</h4>
                  <div className="text-sm font-mono text-slate-400 mt-2 md:mt-0">{study.slug}</div>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {study.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-mono font-semibold rounded-md border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Problem</h5>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{study.problem}</p>
                    <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Flow</h5>
                    <p className="text-slate-500 font-mono text-xs leading-relaxed">{study.story}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Impact</h5>
                    <div className="bg-cyan-50 border-l-4 border-cyan-500 p-5 rounded-r-lg">
                      <p className="text-cyan-900 font-medium text-sm leading-relaxed">{study.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* TECHNICAL ARSENAL */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          id="stack" className="mb-40"
        >
          <h3 className="text-sm font-mono text-cyan-600 uppercase tracking-widest mb-12 flex items-center gap-4 font-semibold">
            <span className="w-8 h-px bg-cyan-600"></span> 04 — Technical Arsenal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalArsenal.map((group, idx) => (
              <motion.div key={group.category} whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-slate-900 font-bold mb-6 pb-4 border-b border-slate-100 flex justify-between items-center">
                  {group.category}
                  <span className="text-slate-300 font-mono text-xs">0{idx + 1}</span>
                </h4>
                <ul className="space-y-4">
                  {group.skills.map(skill => (
                    <li key={skill} className="text-slate-600 text-sm flex items-center font-mono font-medium">
                      <span className="w-2 h-2 rounded-sm bg-cyan-500 mr-3 opacity-70"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          id="experience" className="mb-40"
        >
          <motion.h3 variants={fadeInUp} className="text-sm font-mono text-cyan-600 uppercase tracking-widest mb-12 flex items-center gap-4 font-semibold">
            <span className="w-8 h-px bg-cyan-600"></span> 05 — Professional Experience
          </motion.h3>
          <div className="space-y-16 border-l-2 border-slate-200 ml-4 md:ml-0 md:border-none pl-6 md:pl-0">
            {experience.map((exp, idx) => (
              <motion.div variants={fadeInUp} key={exp.id} className="relative group bg-white md:bg-transparent p-6 md:p-0 rounded-xl md:rounded-none border border-slate-200 md:border-none shadow-sm md:shadow-none">
                <div className="hidden md:block absolute left-[-2.1rem] top-2 w-4 h-4 rounded-full border-[3px] border-cyan-500 bg-white group-hover:scale-125 transition-transform shadow-sm"></div>
                <div className="flex flex-col md:flex-row md:items-baseline mb-6 md:border-b border-slate-200 pb-4">
                  <h4 className="text-2xl font-bold text-slate-900 mr-4">{exp.company}</h4>
                  <span className="text-cyan-700 font-semibold bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-md text-xs">{exp.role}</span>
                  <span className="text-slate-500 font-mono text-sm ml-auto mt-4 md:mt-0 bg-slate-100 px-3 py-1 rounded-md">{exp.period}</span>
                </div>
                <ul className="space-y-4">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-slate-600 text-sm leading-relaxed flex items-start">
                      <span className="text-cyan-500 mr-4 mt-0.5 opacity-80 font-mono font-bold">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          id="contact" className="mb-32 pt-24 border-t border-slate-200 text-center relative"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Let's build something <span className="text-cyan-600">reliable.</span></h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm open to Cloud, DevOps and infrastructure engineering opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`mailto:${profile.email}`} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-cyan-600 transition-all hover:-translate-y-1 shadow-lg shadow-slate-200">
              Email Me
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-cyan-600 hover:text-cyan-700 transition-all hover:-translate-y-1">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-cyan-600 hover:text-cyan-700 transition-all hover:-translate-y-1">
              GitHub
            </a>
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="text-center pb-12 text-sm text-slate-500 font-mono">
          <p className="mb-2 uppercase tracking-widest text-slate-400 font-semibold">{profile.name} — {profile.title}</p>
          <p className="mb-6">Built with engineering, not templates.</p>
          <p className="flex items-center justify-center gap-2">
            Press <kbd className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md border border-slate-300 shadow-sm text-xs font-bold">~</kbd> for terminal
          </p>
        </footer>

        {/* TERMINAL EASTER EGG (Light Mode Variant) */}
        {terminalOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            <div className="w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden font-mono flex flex-col">
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex justify-between items-center text-xs text-slate-500 font-bold">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="ml-2 flex items-center gap-2"><Terminal size={14} /> arnav@portfolio:~</span>
                </div>
                <button onClick={() => setTerminalOpen(false)} className="hover:text-slate-900 transition-colors bg-white px-2 rounded shadow-sm border border-slate-200">Esc ✕</button>
              </div>
              <div className="p-6 h-80 overflow-y-auto text-sm text-slate-700 bg-white">
                <p className="text-cyan-600 mb-2 font-bold">AT-OS v1.0.0 (Cloud & DevOps Environment)</p>
                <p className="mb-6 text-slate-500">System initialized. Type 'help' for available commands.</p>
                <div className="flex items-center">
                  <span className="text-emerald-600 mr-3 font-bold">arnav@portfolio:~$</span>
                  <span className="animate-pulse w-2 h-4 bg-slate-400 inline-block"></span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
