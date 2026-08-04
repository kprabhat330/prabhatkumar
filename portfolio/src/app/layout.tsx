import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/kprabhat330"),
  title: "Prabhat Kumar | Data Analyst — SQL, Excel, KPI Dashboards | Operational Analytics",
  description:
    "Prabhat Kumar is an Operational Data Analyst specializing in SLA-driven insights, KPI dashboard development, SQL querying, and dispute analytics. Currently open to Data Analyst and BI Analyst roles.",
  keywords: [
    "Data Analyst",
    "SQL",
    "Excel",
    "KPI Dashboard",
    "Operations Analyst",
    "Prabhat Kumar",
    "Walmart SFF Analytics",
    "Dispute Analytics",
    "Business Intelligence",
  ],
  authors: [{ name: "Prabhat Kumar" }],
  openGraph: {
    title: "Prabhat Kumar | Data Analyst Portfolio",
    description:
      "Operational Data Analyst — Turning Operational Complexity into SLA-Driven Insights & Process Efficiency.",
    type: "website",
    url: "https://github.com/kprabhat330",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prabhat Kumar — Data Analyst Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
