"use client";

import { motion } from "framer-motion";
import { Quote, CheckCircle, TrendingUp, Cpu, Database } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="text-blue text-sm font-semibold uppercase tracking-widest">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-2 mb-6">
              Bridging Operational Complexity &amp; Data-Driven Clarity
            </h2>

            <div className="space-y-4 text-muted text-base leading-relaxed">
              <p>
                I am a dedicated <strong className="text-navy">Operational Data Analyst &amp; Subject Matter Expert (SME)</strong> with a strong background in Computer Applications (MCA &amp; BCA). My passion lies in taking raw, chaotic operational datasets and transforming them into structured, high-impact KPI dashboards and decision-ready reports.
              </p>
              <p>
                Currently at <strong className="text-navy">Acuity Tech</strong>, I analyze over 100+ weekly Walmart SFF dispute cases while maintaining a <strong className="text-green font-semibold">98%+ data accuracy rate</strong> and a strict <strong className="text-blue font-semibold">100% SLA compliance target</strong>. I specialize in leveraging SQL queries, advanced Excel modeling (Pivot Tables, VLOOKUP/INDEX-MATCH), and root cause analysis to uncover systemic operational bottlenecks.
              </p>
              <p>
                Whether it is building normalized SQL databases or engineering automated reporting templates that save hours of manual labor, I focus on delivering tangible metrics that empower business leaders to make confident, data-backed decisions.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center shrink-0">
                  <Database className="w-5 h-5 text-blue" />
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">SQL &amp; Relational</div>
                  <div className="text-xs text-muted">Data querying</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">BI &amp; Dashboards</div>
                  <div className="text-xs text-muted">KPI visualization</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-green" />
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">Root Cause</div>
                  <div className="text-xs text-muted">Process optimization</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Third-Party Validation / Recommendation Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative bg-gradient-to-br from-navy to-slate-dark text-white rounded-2xl p-8 shadow-xl overflow-hidden">
              {/* Background decorative quote icon */}
              <Quote className="absolute -top-4 -right-4 w-32 h-32 text-white/5 pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-cyan text-xs font-semibold rounded-full mb-6">
                <CheckCircle className="w-3.5 h-3.5" />
                Professional Peer Recommendation
              </div>

              <blockquote className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6 relative z-10">
                &ldquo;Prabhat has an exceptional ability to pinpoint operational discrepancies that others miss. His structured SQL approach and meticulous Excel dashboards transformed our dispute resolution efficiency, consistently maintaining our SLA accuracy above 98%.&rdquo;
              </blockquote>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-10">
                <div>
                  <div className="font-bold text-white text-base">Senior Operations Manager</div>
                  <div className="text-xs text-slate-400">Acuity Tech — Operational Review</div>
                </div>
                <a
                  href="https://linkedin.com/in/kprabhat330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-blue text-white transition-colors"
                  aria-label="View LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
