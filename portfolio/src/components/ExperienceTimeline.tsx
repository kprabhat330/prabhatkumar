"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, Download, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    type: "work" as const,
    title: "Subject Matter Expert (SME) & Operations Associate",
    company: "Acuity Tech",
    location: "India",
    period: "2024 – Present",
    description: [
      "Lead analysis of 100+ weekly Walmart SFF dispute cases, maintaining a 98%+ data accuracy rate and 100% SLA compliance target",
      "Design and maintain executive KPI dashboards tracking SLA compliance, dispute resolution metrics, and operational efficiency",
      "Perform root cause analysis on recurring dispute patterns, delivering data-backed recommendations to leadership that reduced cycle time from 2 days to 4 hours",
      "Implement multi-layer data validation protocols ensuring zero SLA breaches across weekly review cycles",
      "Collaborate with cross-functional operations teams to optimize dispute workflows using SQL queries and Excel automation",
    ],
    tags: ["SQL", "Excel", "KPI Dashboards", "Data Validation", "SLA Monitoring", "Root Cause Analysis"],
  },
  {
    type: "work" as const,
    title: "Research Associate",
    company: "Acadecraft Pvt. Ltd.",
    location: "India",
    period: "2023 – 2024",
    description: [
      "Conducted systematic data research and quantitative analysis for educational technology clients",
      "Produced 20+ analytical research reports supporting product development and content strategy decisions",
      "Applied structured data collection and quality assurance audit procedures, achieving 99%+ record accuracy across research datasets",
      "Maintained research databases in Excel and Google Sheets with strict data integrity standards and documentation",
    ],
    tags: ["Excel", "Google Sheets", "Data Quality Assurance", "Analytical Reporting", "Quantitative Research"],
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Lovely Professional University (LPU)",
    location: "Phagwara, Punjab",
    gradYear: "Graduated 2023",
    period: "2021 – 2023",
    cgpa: "7.5 CGPA",
    highlights: ["Database Management Systems (DBMS)", "Data Structures & Algorithms", "Software Engineering", "SQL & Relational Design"],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Lovely Professional University (LPU)",
    location: "Phagwara, Punjab",
    gradYear: "Graduated 2021",
    period: "2018 – 2021",
    cgpa: "7.2 CGPA",
    highlights: ["Computer Programming", "Mathematics & Statistics", "Database Systems", "Web Technologies"],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue text-sm font-semibold uppercase tracking-widest">
            Career &amp; Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4">
            Experience &amp; Education
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A proven trajectory of operational excellence, data analysis, and advanced computer applications education.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-5 h-5 text-blue" />
              <h3 className="text-xl font-bold text-navy">Work Experience</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue via-cyan to-green" />

              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-blue border-[3px] border-background z-10" />

                    <div className="bg-white rounded-xl p-5 border border-border hover:border-blue/20 shadow-sm hover:shadow-md transition-all">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="font-semibold text-navy text-lg">{exp.title}</h4>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted mb-3">
                        <span className="font-semibold text-blue">
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-xs px-2 py-0.5 bg-slate-100 rounded text-slate-700">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, j) => (
                          <li
                            key={j}
                            className="text-sm text-muted leading-relaxed flex gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-blue/5 text-blue text-xs font-mono-tag rounded-md border border-blue/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-5 h-5 text-cyan" />
              <h3 className="text-xl font-bold text-navy">Education</h3>
            </div>

            <div className="relative">
              <div className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan to-blue" />

              <div className="space-y-8">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-cyan border-[3px] border-background z-10" />

                    <div className="bg-white rounded-xl p-5 border border-border hover:border-cyan/20 shadow-sm hover:shadow-md transition-all">
                      <h4 className="font-bold text-navy text-lg mb-1">
                        {edu.degree}
                      </h4>
                      <div className="text-sm font-semibold text-cyan mb-2">
                        {edu.school} · <span className="text-slate-500 font-normal">{edu.location}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                          {edu.gradYear}
                        </span>
                        <span className="px-2.5 py-0.5 bg-cyan/10 text-cyan text-xs font-semibold rounded-full">
                          {edu.cgpa}
                        </span>
                        <span className="text-xs text-muted font-mono">
                          {edu.period}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-2.5 py-1 bg-slate-50 text-slate-700 text-xs font-mono-tag rounded border border-border"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume Secondary CTA */}
        <div className="mt-14 text-center">
          <a
            href="./Prabhat_Kumar_DataAnalyst.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-medium rounded-xl hover:bg-slate-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            Download Complete Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
