"use client";

import { motion } from "framer-motion";
import { ExternalLink, BarChart3, Database, Table2, CheckCircle2, ArrowRight, Sparkles, Layers, FileSpreadsheet } from "lucide-react";

const projects = [
  {
    id: "walmart-sff",
    icon: BarChart3,
    title: "Walmart SFF Dispute Data Analysis & KPI Dashboard",
    company: "Acuity Tech",
    problem:
      "Walmart's Small Format Fulfillment (SFF) operations generated 100+ weekly dispute cases. Leadership relied on manual weekly review cycles — data inconsistencies caused SLA breach risk and delayed escalation.",
    tools: ["SQL", "Excel", "Pivot Tables", "MS Access", "MySQL", "Data Validation", "Power BI"],
    methodology:
      "Built automated data pipelines for dispute ingestion, applied multi-layer validation checks, and designed real-time KPI dashboards tracking accuracy rates, resolution times, and SLA compliance.",
    impact:
      "Achieved 98%+ data accuracy rate, maintained 100% SLA compliance target, and reduced dispute resolution cycle time from 2 days to 4 hours.",
    insight:
      "Top 3 dispute categories caused 60%+ of SLA breaches — identified via SQL GROUP BY analysis.",
    beforeAfter: {
      before: "Manual dispute tracking, 2-day reporting cycle, inconsistent SLA data, high escalation risk",
      after: "Automated validation pipeline, 4-hour dashboard refresh, 98%+ accuracy, 100% SLA compliance",
    },
    github: "https://github.com/kprabhat330/Walmart-SFF-Dispute-Analysis",
    accent: "from-blue to-cyan",
    mockupType: "walmart",
  },
  {
    id: "cab-rental",
    icon: Database,
    title: "Relational Cab Rental Management System",
    company: "Database Architecture",
    problem:
      "A cab rental operator faced booking conflicts, driver assignment errors, and incomplete fare records due to an unstructured data system — causing revenue leakage and operational friction.",
    tools: ["MySQL", "ER Diagrams", "3NF Normalization", "Stored Procedures", "Lucidchart", "SQL Queries"],
    methodology:
      "Designed a fully normalized (3NF) relational schema with entity-relationship modeling, implemented complex joins, foreign key constraints, and stored procedure triggers for operational reporting.",
    impact:
      "3NF schema eliminated 70%+ data redundancy · Indexed foreign keys reduced query time from 1.4s to 0.12s · Constraint enforcement achieved zero booking conflict rate.",
    insight:
      "Automated stored procedure fare triggers removed manual calculation errors across 1,000+ monthly rides.",
    beforeAfter: {
      before: "Unstructured spreadsheets, booking collisions, manual fare calculation, 1.4s query lag",
      after: "3NF Normalized SQL schema, zero booking collisions, automated fare triggers, 0.12s query speed",
    },
    github: "https://github.com/kprabhat330/Cab-Rental-Database-Design",
    accent: "from-cyan to-green",
    mockupType: "cab",
  },
  {
    id: "excel-dashboard",
    icon: Table2,
    title: "Excel Operational Reporting Dashboard",
    company: "Operations Analytics",
    problem:
      "Operational teams spent 8+ hours/week manually compiling 11 separate operational reports across teams, leading to delayed decision-making and formatting errors.",
    tools: [
      "Excel",
      "Pivot Tables",
      "VLOOKUP",
      "INDEX-MATCH",
      "Macro Automation",
      "Conditional Formatting",
      "Power Query",
    ],
    methodology:
      "Built interactive Excel dashboards with dynamic pivot tables, automated data lookups (VLOOKUP/INDEX-MATCH), and visual KPI indicators using conditional formatting and chart widgets.",
    impact:
      "Reduced manual reporting effort by 40% (8+ hrs/week → ~5 hrs/week), automated weekly refresh, and achieved zero formatting errors after template standardization.",
    insight:
      "80/20 Analysis revealed 3 report types (out of 11) accounted for 80% of manual effort — consolidating these into a single dynamic dashboard drove the 40% time savings.",
    beforeAfter: {
      before: "8+ hours/week manual compilation across 11 disconnected reports",
      after: "Single consolidated dynamic dashboard with automated refresh in < 30 minutes",
    },
    github: "https://github.com/kprabhat330/Excel-Operational-Dashboard",
    accent: "from-green to-blue",
    mockupType: "excel",
  },
];

/* Component for Project Visual Dashboard Mockup (Min 800x450 ratio) */
function ProjectVisualMockup({ type }: { type: string }) {
  if (type === "walmart") {
    return (
      <div className="w-full bg-slate-900 rounded-xl p-4 sm:p-6 text-white border border-slate-700 shadow-xl overflow-hidden my-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs font-mono text-slate-400 ml-2">Walmart_SFF_Dispute_Analytics_v2.4.sql</span>
          </div>
          <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono">LIVE SLA MONITORING</span>
        </div>

        {/* Dashboard Grid Mockup */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
            <div className="text-[10px] text-slate-400 uppercase font-mono">Weekly Disputes</div>
            <div className="text-xl font-bold text-cyan-400">118 Cases</div>
            <div className="text-[10px] text-emerald-400 mt-1">↑ 100% Processed</div>
          </div>
          <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
            <div className="text-[10px] text-slate-400 uppercase font-mono">Accuracy Rate</div>
            <div className="text-xl font-bold text-emerald-400">98.9%</div>
            <div className="text-[10px] text-slate-400 mt-1">Target: 98.0%</div>
          </div>
          <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
            <div className="text-[10px] text-slate-400 uppercase font-mono">SLA Compliance</div>
            <div className="text-xl font-bold text-blue-400">100.0%</div>
            <div className="text-[10px] text-blue-300 mt-1">0 Breach Risk</div>
          </div>
          <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
            <div className="text-[10px] text-slate-400 uppercase font-mono">Cycle Time</div>
            <div className="text-xl font-bold text-purple-400">4.2 Hours</div>
            <div className="text-[10px] text-emerald-400 mt-1">↓ 75% Faster</div>
          </div>
        </div>

        {/* Simulated SQL & Visual Chart */}
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2 bg-slate-800/50 p-3 rounded-lg border border-slate-700/60 font-mono text-[11px]">
            <div className="text-slate-400 mb-1">// SQL Analytics Snippet: Top Dispute Root Causes</div>
            <div className="text-blue-300">SELECT dispute_cat, COUNT(*) AS total, ROUND(AVG(res_time_hrs),1) AS avg_hrs</div>
            <div className="text-slate-300">FROM walmart_sff_disputes</div>
            <div className="text-cyan-300">GROUP BY dispute_cat ORDER BY total DESC LIMIT 3;</div>
            <div className="mt-2 text-emerald-400 text-[10px]">↳ Result: 1. Inventory Sync (42%) | 2. Pricing Discrepancy (24%) | 3. Transit Delay (18%)</div>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/60 flex flex-col justify-between">
            <div className="text-[11px] font-medium text-slate-300">Dispute Root Cause Breakdown</div>
            <div className="space-y-1.5 mt-2">
              <div>
                <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                  <span>Inventory Sync</span> <span>42%</span>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[42%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                  <span>Pricing Discrepancy</span> <span>24%</span>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-cyan-500 h-full w-[24%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "cab") {
    return (
      <div className="w-full bg-slate-900 rounded-xl p-4 sm:p-6 text-white border border-slate-700 shadow-xl overflow-hidden my-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-slate-300">MySQL 3NF Relational Database Schema &amp; ER Diagram</span>
          </div>
          <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">0.12s QUERY SPEED</span>
        </div>

        {/* ER Diagram Representation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
          <div className="bg-slate-800/90 p-3 rounded-lg border-l-4 border-blue-500 border-t border-r border-b border-slate-700">
            <div className="font-bold text-blue-400 mb-1">tbl_passengers</div>
            <div className="text-[10px] text-slate-400">🔑 passenger_id (PK)</div>
            <div className="text-[10px] text-slate-400">full_name</div>
            <div className="text-[10px] text-slate-400">contact_num</div>
          </div>
          <div className="bg-slate-800/90 p-3 rounded-lg border-l-4 border-cyan-500 border-t border-r border-b border-slate-700">
            <div className="font-bold text-cyan-400 mb-1">tbl_drivers</div>
            <div className="text-[10px] text-slate-400">🔑 driver_id (PK)</div>
            <div className="text-[10px] text-slate-400">license_no</div>
            <div className="text-[10px] text-slate-400">cab_model</div>
          </div>
          <div className="bg-slate-800/90 p-3 rounded-lg border-l-4 border-purple-500 border-t border-r border-b border-slate-700">
            <div className="font-bold text-purple-400 mb-1">tbl_bookings (3NF)</div>
            <div className="text-[10px] text-slate-400">🔑 booking_id (PK)</div>
            <div className="text-[10px] text-slate-400">🔗 passenger_id (FK)</div>
            <div className="text-[10px] text-slate-400">🔗 driver_id (FK)</div>
          </div>
          <div className="bg-slate-800/90 p-3 rounded-lg border-l-4 border-emerald-500 border-t border-r border-b border-slate-700">
            <div className="font-bold text-emerald-400 mb-1">tbl_fares &amp; Triggers</div>
            <div className="text-[10px] text-slate-400">🔑 fare_id (PK)</div>
            <div className="text-[10px] text-slate-400">base_rate + distance</div>
            <div className="text-[10px] text-emerald-300">⚡ Auto-Calc Trigger</div>
          </div>
        </div>

        <div className="mt-3 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/50 flex flex-wrap items-center justify-between text-[11px] text-slate-300 font-mono">
          <span>✔️ 70%+ Data Redundancy Eliminated</span>
          <span>✔️ Foreign Keys Indexed</span>
          <span>✔️ Zero Booking Collisions</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-900 rounded-xl p-4 sm:p-6 text-white border border-slate-700 shadow-xl overflow-hidden my-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono text-slate-300">Excel Operational Dashboard &amp; 80/20 Pivot Model</span>
        </div>
        <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono">40% TIME SAVED</span>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
          <div className="text-[10px] text-slate-400 font-mono">Manual Time Before</div>
          <div className="text-lg font-bold text-red-400">8.5 Hrs / Wk</div>
          <div className="text-[10px] text-slate-400 mt-1">11 Separate Reports</div>
        </div>
        <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
          <div className="text-[10px] text-slate-400 font-mono">Automated Time After</div>
          <div className="text-lg font-bold text-emerald-400">5.0 Hrs / Wk</div>
          <div className="text-[10px] text-emerald-400 mt-1">Single Consolidated Model</div>
        </div>
        <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
          <div className="text-[10px] text-slate-400 font-mono">Formula Architecture</div>
          <div className="text-sm font-bold text-cyan-400">INDEX-MATCH + Pivot</div>
          <div className="text-[10px] text-slate-300 mt-1">Dynamic Named Ranges</div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue text-sm font-semibold uppercase tracking-widest">
            Portfolio Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4">
            Featured Data Projects
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Real-world projects showcasing end-to-end SQL querying, relational database design, and high-conversion KPI dashboards with quantified business impact.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-border hover:border-blue/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Accent top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.accent}`} />

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center shrink-0">
                      <project.icon className="w-6 h-6 text-blue" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-navy">
                          {project.title}
                        </h3>
                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
                          {project.company}
                        </span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue hover:bg-blue/10 rounded-xl border border-blue/30 transition-all shrink-0 shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Repository
                  </a>
                </div>

                {/* VISUAL DASHBOARD MOCKUP SCREENSHOT CARD (Fix #1 & #15) */}
                <ProjectVisualMockup type={project.mockupType} />

                {/* BEFORE -> AFTER Callout Block */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-navy uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-blue" />
                    Before &amp; After Transformation Impact
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="bg-red-50/70 border border-red-200 text-red-800 p-2.5 rounded-lg flex items-start gap-2">
                      <span className="font-bold text-red-600 shrink-0">BEFORE:</span>
                      <span>{project.beforeAfter.before}</span>
                    </div>
                    <div className="bg-emerald-50/70 border border-emerald-200 text-emerald-800 p-2.5 rounded-lg flex items-start gap-2">
                      <span className="font-bold text-emerald-600 shrink-0">AFTER:</span>
                      <span>{project.beforeAfter.after}</span>
                    </div>
                  </div>
                </div>

                {/* Problem & Methodology */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      Problem Statement
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      Analytical Methodology
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">
                      {project.methodology}
                    </p>
                  </div>
                </div>

                {/* Key Insight Highlight */}
                <div className="bg-blue/5 border-l-4 border-blue p-3.5 rounded-r-xl mb-6 text-sm text-navy font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                  <span><strong>Analytical Insight:</strong> {project.insight}</span>
                </div>

                {/* Footer: Tools & Impact */}
                <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      Tech Stack &amp; Tools
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 bg-slate-100 text-slate-800 text-xs font-mono-tag rounded-md border border-slate-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0 max-w-sm">
                    <h4 className="text-xs font-bold text-green uppercase tracking-wider mb-1">
                      Business Outcome
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
