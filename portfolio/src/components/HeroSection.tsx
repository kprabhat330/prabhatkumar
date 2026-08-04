"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown, ShieldCheck, BarChart3, Target, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";

const kpiCards = [
  { label: "Data Accuracy Rate", value: "98%+", icon: ShieldCheck, color: "text-green" },
  { label: "Weekly Dispute Cases", value: "100+", icon: BarChart3, color: "text-cyan" },
  { label: "SLA Compliance Target", value: "100%", icon: Target, color: "text-blue" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue/3 via-transparent to-cyan/3 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue/10 text-blue text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
                <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
                Operational Data Analyst &amp; SME
              </span>
            </motion.div>

            {/* H1 Name as primary identity */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight mb-2"
            >
              Prabhat Kumar
            </motion.h1>

            {/* H2 Role + Value Proposition */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold leading-tight text-navy mb-5"
            >
              Data Analyst — Turning Operational Complexity into{" "}
              <span className="gradient-text">SLA-Driven Insights</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-muted text-base sm:text-lg leading-relaxed mb-6 max-w-xl"
            >
              <strong className="text-navy font-semibold">SQL · Excel · KPI Dashboards</strong> | Specialized in dispute analytics, data validation, and operational process optimization. Delivering measurable business impact through SLA performance tracking and root cause analysis.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue text-white font-medium rounded-xl hover:bg-blue-light transition-all shadow-lg shadow-blue/25 hover:shadow-xl hover:shadow-blue/30 hover:-translate-y-0.5"
              >
                View Case Studies
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="/Prabhat_Kumar_DataAnalyst.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy font-medium rounded-xl border border-border hover:border-blue/30 hover:bg-blue/5 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            {/* Open to Work & Location Signal */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 text-xs sm:text-sm text-muted">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green/10 text-green font-medium rounded-full border border-green/20">
                <Briefcase className="w-3.5 h-3.5" />
                Open to Data Analyst Roles (Remote / Hybrid)
              </span>
              <span className="inline-flex items-center gap-1 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-blue" />
                India
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Profile + KPI Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative flex flex-col items-center"
          >
            {/* Profile Picture */}
            <div className="relative mb-8">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-blue/10 relative z-10">
                <Image
                  src="/profile.jpg"
                  alt="Prabhat Kumar — Data Analyst"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue/20 animate-pulse-glow" />
              <div className="absolute -inset-3 rounded-full border border-dashed border-cyan/20 animate-spin" style={{ animationDuration: "20s" }} />
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
              {kpiCards.map((kpi, i) => (
                <motion.div
                  key={kpi.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.15, duration: 0.5 }}
                  className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-lg shadow-black/5 border border-border hover:border-blue/30 hover:shadow-xl transition-all group cursor-default"
                >
                  <kpi.icon className={`w-5 h-5 mx-auto mb-1.5 ${kpi.color} group-hover:scale-110 transition-transform`} />
                  <div className={`text-xl sm:text-2xl font-bold ${kpi.color}`}>
                    {kpi.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted mt-0.5 leading-tight">
                    {kpi.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
