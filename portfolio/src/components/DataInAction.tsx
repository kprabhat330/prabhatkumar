"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Activity, BarChart3, TrendingUp } from "lucide-react";

const weeklyData = [
  { week: "Week 1", disputes: 87, accuracy: 96.2, resolved: 84 },
  { week: "Week 2", disputes: 102, accuracy: 97.1, resolved: 99 },
  { week: "Week 3", disputes: 95, accuracy: 98.4, resolved: 94 },
  { week: "Week 4", disputes: 118, accuracy: 97.8, resolved: 115 },
  { week: "Week 5", disputes: 107, accuracy: 98.9, resolved: 106 },
  { week: "Week 6", disputes: 93, accuracy: 99.1, resolved: 93 },
  { week: "Week 7", disputes: 124, accuracy: 98.2, resolved: 121 },
  { week: "Week 8", disputes: 110, accuracy: 98.7, resolved: 109 },
  { week: "Week 9", disputes: 98, accuracy: 99.3, resolved: 98 },
  { week: "Week 10", disputes: 115, accuracy: 98.5, resolved: 113 },
  { week: "Week 11", disputes: 105, accuracy: 99.0, resolved: 105 },
  { week: "Week 12", disputes: 121, accuracy: 98.8, resolved: 119 },
];

type ChartType = "area" | "bar";

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl shadow-xl border border-border p-4">
        <p className="font-semibold text-navy text-sm mb-2">{label}</p>
        {payload.map((entry, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted">{entry.name}:</span>
            <span className="font-semibold text-navy">
              {entry.name === "Accuracy Rate" ? `${entry.value}%` : entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function DataInAction() {
  const [chartType, setChartType] = useState<ChartType>("area");

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-blue text-sm font-semibold uppercase tracking-widest">
            Data in Action
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4">
            Interactive Analytics Demonstration
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Dispute volumes vs. accuracy rates across weekly operational cycles
            — demonstrating real-time analytical capability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-border shadow-lg p-6 sm:p-8"
        >
          {/* Chart Type Toggles */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue" />
              <h3 className="font-semibold text-navy">
                Weekly Operations Analytics
              </h3>
            </div>
            <div className="flex bg-slate-100 rounded-lg p-1">
              <button
                onClick={() => setChartType("area")}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                  chartType === "area"
                    ? "bg-white text-navy shadow-sm"
                    : "text-muted hover:text-navy"
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                Area
              </button>
              <button
                onClick={() => setChartType("bar")}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                  chartType === "bar"
                    ? "bg-white text-navy shadow-sm"
                    : "text-muted hover:text-navy"
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                Bar
              </button>
            </div>
          </div>

          {/* Chart */}
          <div className="h-[350px] sm:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === "area" ? (
                <AreaChart data={weeklyData}>
                  <defs>
                    <linearGradient id="disputeGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="accuracyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis
                    dataKey="week"
                    tick={{ fontSize: 12, fill: "#64748B" }}
                    axisLine={{ stroke: "#E2E8F0" }}
                    tickLine={false}
                  />
                  <YAxis
                    yAxisId="left"
                    tick={{ fontSize: 12, fill: "#64748B" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    domain={[94, 100]}
                    tick={{ fontSize: 12, fill: "#64748B" }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(val: number) => `${val}%`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    wrapperStyle={{ fontSize: 12, paddingTop: 16 }}
                  />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="disputes"
                    name="Dispute Volume"
                    stroke="#2563EB"
                    strokeWidth={2}
                    fill="url(#disputeGrad)"
                  />
                  <Area
                    yAxisId="right"
                    type="monotone"
                    dataKey="accuracy"
                    name="Accuracy Rate"
                    stroke="#06B6D4"
                    strokeWidth={2}
                    fill="url(#accuracyGrad)"
                  />
                </AreaChart>
              ) : (
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis
                    dataKey="week"
                    tick={{ fontSize: 12, fill: "#64748B" }}
                    axisLine={{ stroke: "#E2E8F0" }}
                    tickLine={false}
                  />
                  <YAxis
                    yAxisId="left"
                    tick={{ fontSize: 12, fill: "#64748B" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    domain={[94, 100]}
                    tick={{ fontSize: 12, fill: "#64748B" }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(val: number) => `${val}%`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    wrapperStyle={{ fontSize: 12, paddingTop: 16 }}
                  />
                  <Bar
                    yAxisId="left"
                    dataKey="disputes"
                    name="Dispute Volume"
                    fill="#2563EB"
                    radius={[4, 4, 0, 0]}
                    barSize={20}
                  />
                  <Bar
                    yAxisId="left"
                    dataKey="resolved"
                    name="Resolved"
                    fill="#22C55E"
                    radius={[4, 4, 0, 0]}
                    barSize={20}
                  />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-border">
            {[
              { label: "Avg. Weekly Disputes", value: "106", color: "text-blue" },
              { label: "Peak Accuracy", value: "99.3%", color: "text-cyan" },
              { label: "Avg. Resolution Rate", value: "98.2%", color: "text-green" },
              { label: "Total Cases Analyzed", value: "1,275", color: "text-navy" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-muted mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
