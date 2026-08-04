"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Table2,
  Database,
  Code2,
  PieChart,
} from "lucide-react";

const skillCategories = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    color: "bg-blue/10 text-blue",
    skills: [
      "Data Analysis & Interpretation",
      "Dispute Analytics",
      "KPI Dashboard Design",
      "Statistical Reporting",
      "Data Validation & QA",
      "Root Cause Analysis",
      "SLA Monitoring",
    ],
  },
  {
    icon: Table2,
    title: "Excel & Reporting",
    color: "bg-green/10 text-green",
    skills: [
      "Pivot Tables",
      "VLOOKUP / HLOOKUP",
      "INDEX-MATCH",
      "Power Query",
      "Google Sheets",
      "Conditional Formatting",
      "Macro Automation",
    ],
  },
  {
    icon: Database,
    title: "Databases & SQL",
    color: "bg-cyan/10 text-cyan",
    skills: [
      "SQL",
      "MySQL",
      "Complex JOINs",
      "Window Functions",
      "Subqueries",
      "MongoDB",
      "MS Access",
      "Query Optimization",
    ],
  },
  {
    icon: Code2,
    title: "Technical & Scripting",
    color: "bg-purple-100 text-purple-600",
    skills: [
      "Python (Pandas, NumPy)",
      "R (Basic)",
      "SQL Scripting",
      "Java / C++",
      "HTML / CSS",
      "Problem Solving",
    ],
  },
  {
    icon: PieChart,
    title: "BI & Visualization Tools",
    color: "bg-amber-100 text-amber-600",
    skills: [
      "Power BI",
      "Tableau",
      "Google Data Studio",
      "Dashboard Design",
      "Data Storytelling",
      "KPI Reporting",
    ],
  },
];

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-20 lg:py-24 bg-gradient-to-b from-background to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue text-sm font-semibold uppercase tracking-widest">
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4">
            Skills Matrix
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A comprehensive, recruiter-verified toolkit for data-driven decision making across
            analytics, databases, BI tools, and scripting.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-2xl p-6 border border-border hover:border-blue/20 shadow-sm hover:shadow-lg transition-all duration-300 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${cat.color}`}
                >
                  <cat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-navy">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-50 text-slate-dark text-xs sm:text-sm font-mono-tag rounded-lg border border-border hover:bg-blue/5 hover:border-blue/20 hover:text-blue transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
