"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    description:
      "Comprehensive program covering data analytics foundations, spreadsheets, SQL, R programming, data visualization, Tableau, and the complete data analysis lifecycle.",
    skills: ["Data Analysis", "SQL", "Spreadsheets", "Tableau", "R Programming", "Data Storytelling"],
    color: "from-blue to-cyan",
  },
  {
    title: "SQL & Relational Database Analytics Specialization",
    issuer: "Advanced Analytics Academy",
    description:
      "Hands-on certification focused on relational database modeling, complex multi-table JOIN queries, window functions, stored procedures, and query performance tuning.",
    skills: ["SQL", "MySQL", "Subqueries", "Window Functions", "Data Modeling", "Optimization"],
    color: "from-cyan to-green",
  },
  {
    title: "Business Intelligence & Executive KPI Dashboarding",
    issuer: "Analytics Training Institute",
    description:
      "Mastery in converting raw operational data into interactive, dynamic dashboards using Excel Power Query, Pivot Tables, and BI reporting frameworks.",
    skills: ["Power BI", "Excel Pivot Tables", "INDEX-MATCH", "SLA Dashboards", "KPI Design"],
    color: "from-green to-blue",
  },
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-20 lg:py-24 bg-gradient-to-b from-background to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue text-sm font-semibold uppercase tracking-widest">
            Professional Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4">
            Data Analyst Certifications
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Industry-recognized certifications laser-focused on data analytics, SQL database architecture, and executive KPI reporting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-border hover:border-blue/20 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Gradient top */}
              <div>
                <div className={`h-1.5 bg-gradient-to-r ${cert.color}`} />

                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mb-4 group-hover:bg-blue/20 transition-colors">
                    <Award className="w-6 h-6 text-blue" />
                  </div>

                  <h3 className="text-lg font-bold text-navy mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-blue font-semibold mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-green/10 text-green-800 text-xs font-medium rounded-md"
                      >
                        <CheckCircle2 className="w-3 h-3 text-green" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <a
                  href="https://www.linkedin.com/in/kprabhat330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-blue font-semibold hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Verify Credential on LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
