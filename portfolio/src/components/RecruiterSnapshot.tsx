"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Database, LayoutDashboard, SearchCode } from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    title: "Data Validation & QA",
    description:
      "Ensuring 98%+ data accuracy through systematic validation of dispute records, SFF shipment data, and operational metrics against SLA benchmarks.",
    highlight: "98%+ Accuracy",
  },
  {
    icon: Database,
    title: "SQL & Database Querying",
    description:
      "Proficient in SQL, MySQL, MongoDB, and MS Access for complex data extraction, transformation, and reporting across relational databases.",
    highlight: "4+ Databases",
  },
  {
    icon: LayoutDashboard,
    title: "Executive KPI Dashboards",
    description:
      "Building comprehensive dashboards with Excel pivot tables, charts, and conditional formatting to track operational KPIs and SLA compliance.",
    highlight: "Real-time KPIs",
  },
  {
    icon: SearchCode,
    title: "Root Cause Analysis",
    description:
      "Systematic investigation of dispute patterns and process inefficiencies, delivering data-backed recommendations to leadership for process optimization.",
    highlight: "Actionable Insights",
  },
];

export default function RecruiterSnapshot() {
  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue text-sm font-semibold uppercase tracking-widest">
            Key Strengths
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4">
            Core Competencies &amp; Expertise
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Key capabilities that drive measurable business outcomes in
            operational data analytics and process optimization.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 border border-border hover:border-blue/30 shadow-sm hover:shadow-xl hover:shadow-blue/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mb-4 group-hover:bg-blue/20 transition-colors">
                <card.icon className="w-6 h-6 text-blue" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                {card.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {card.description}
              </p>
              <span className="inline-flex items-center px-2.5 py-1 bg-green/10 text-green text-xs font-semibold rounded-full">
                {card.highlight}
              </span>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue to-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
