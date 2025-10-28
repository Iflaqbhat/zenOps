"use client";
import React, { useState } from "react";
import DemoModal from "../../components/demo/DemoModal";

export default function CaseStudiesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-neutral-950 relative">
      {/* Same background as homepage */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-secure-teal/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-threat-blue/10 rounded-full blur-[80px] pointer-events-none" />

      <section className="relative py-32 px-4 text-white">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            Customer{" "}
            <span className="bg-gradient-to-r from-yellow to-alert-amber bg-clip-text text-transparent">
              Success Stories
            </span>
          </h1>
          <p className="text-xl text-neutral-400">
            See how healthcare organizations are transforming patient care with
            AI
          </p>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-20">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <div className="aspect-video bg-neutral-900 border border-yellow/20 rounded-3xl flex items-center justify-center shadow-2xl">
                  <span className="text-8xl">{study.icon}</span>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="mb-4">
                  <span className="bg-yellow/10 text-yellow border border-yellow/30 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                    {study.category}
                  </span>
                </div>
                <h2 className="text-4xl font-black mb-4 text-white">
                  {study.organization}
                </h2>
                <p className="text-2xl text-neutral-400 mb-6 italic leading-relaxed">
                  "{study.quote}"
                </p>
                <div className="mb-8">
                  <p className="font-bold text-lg text-white">{study.author}</p>
                  <p className="text-neutral-500">{study.authorTitle}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.results.map((result, i) => (
                    <div
                      key={i}
                      className="bg-neutral-900 border border-neutral-800 hover:border-yellow/30 p-6 rounded-2xl transition-colors"
                    >
                      <div className="text-4xl font-black mb-1 text-yellow">
                        {result.metric}
                      </div>
                      <div className="text-sm text-neutral-400 font-semibold uppercase tracking-wide">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-secure-teal hover:text-yellow font-bold flex items-center gap-2 text-lg transition-colors"
                >
                  Read Full Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-32 px-4">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-5xl font-black mb-6 text-white">
            Ready to join them?
          </h2>
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
            Start transforming your healthcare organization with AI agents today
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-secure-teal hover:bg-secure-teal/90 text-white px-12 py-5 rounded-2xl font-bold transition-opacity uppercase tracking-wide"
          >
            Get Started
          </button>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}

const caseStudies = [
  {
    organization: "Memorial Regional Hospital",
    category: "Multi-Specialty Hospital",
    icon: "🏥",
    quote:
      "ZenOps AI Nurse reduced our patient intake time by 45 minutes. Our staff can now focus on critical care instead of paperwork.",
    author: "Dr. Lisa Martinez",
    authorTitle: "Chief Medical Officer",
    results: [
      { metric: "45min", label: "Faster Intake" },
      { metric: "90%", label: "Staff Satisfaction" },
      { metric: "$2M", label: "Annual Savings" },
      { metric: "50%", label: "Less Burnout" },
    ],
  },
  {
    organization: "Summit Medical Group",
    category: "Primary Care Network",
    icon: "⚕️",
    quote:
      "The AI Receptionist handles 500+ calls daily with zero wait time. Patient satisfaction scores increased by 35%.",
    author: "James Chen, MBA",
    authorTitle: "Director of Operations",
    results: [
      { metric: "500+", label: "Daily Calls" },
      { metric: "0sec", label: "Wait Time" },
      { metric: "35%", label: "Higher Satisfaction" },
      { metric: "24/7", label: "Availability" },
    ],
  },
  {
    organization: "Riverside Orthopedic Clinic",
    category: "Specialty Practice",
    icon: "🩺",
    quote:
      "AI Scribe gave us 3 hours back every day per physician. Documentation is faster and more accurate than ever.",
    author: "Dr. Robert Kim",
    authorTitle: "Lead Surgeon",
    results: [
      { metric: "3hrs", label: "Saved Daily" },
      { metric: "99%", label: "Accuracy" },
      { metric: "15%", label: "More Patients" },
      { metric: "80%", label: "Less Admin Time" },
    ],
  },
];
