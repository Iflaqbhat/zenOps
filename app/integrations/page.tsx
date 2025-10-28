"use client";
import React, { useState } from "react";
import DemoModal from "../../components/demo/DemoModal";
import {
  Stethoscope,
  Calendar,
  CreditCard,
  Clock,
  Video,
  Activity,
} from "lucide-react";

export default function IntegrationsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mainEHRs = [
    { name: "Epic", description: "Seamless Epic EHR integration", icon: "🏥" },
    {
      name: "Cerner",
      description: "Full Cerner Oracle compatibility",
      icon: "⚕️",
    },
    {
      name: "Athenahealth",
      description: "Native athenaOne integration",
      icon: "💊",
    },
    { name: "DrChrono", description: "Complete DrChrono support", icon: "🩺" },
  ];

  const categories = [
    { name: "EHR Systems", count: "50+", IconComp: Stethoscope },
    { name: "Practice Management", count: "30+", IconComp: Calendar },
    { name: "Billing", count: "25+", IconComp: CreditCard },
    { name: "Scheduling", count: "15+", IconComp: Clock },
    { name: "Telehealth", count: "10+", IconComp: Video },
    { name: "Labs & Diagnostics", count: "20+", IconComp: Activity },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 relative">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-secure-teal/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-threat-blue/10 rounded-full blur-[80px] pointer-events-none" />

      <section className="relative py-24 px-4 text-white">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-6xl font-black mb-6 text-white">
            EHR{" "}
            <span className="bg-gradient-to-r from-yellow to-alert-amber bg-clip-text text-transparent">
              Integrations
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8">
            ZenOps AI integrates with 150+ healthcare systems. Set up takes
            minutes, not months.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-secure-teal hover:bg-secure-teal/90 text-white px-10 py-4 rounded-2xl font-bold transition-opacity"
          >
            Schedule Integration Call
          </button>
        </div>
      </section>

      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-center mb-16 text-white">
            Major EHR Partners
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainEHRs.map((ehr, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-threat-blue/50 transition-all text-center"
              >
                <div className="text-6xl mb-4">{ehr.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {ehr.name}
                </h3>
                <p className="text-neutral-400">{ehr.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-center mb-16 text-white">
            Integration Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-threat-blue/50 transition-all"
              >
                <cat.IconComp className="w-12 h-12 text-secure-teal mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {cat.name}
                </h3>
                <div className="text-4xl font-black text-secure-teal">
                  {cat.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="p-12 rounded-3xl border-2 border-threat-blue/30 bg-neutral-900/50 backdrop-blur-sm text-center">
            <h2 className="text-4xl font-black mb-6 text-white">
              Don't see your system?
            </h2>
            <p className="text-xl text-neutral-400 mb-8">
              We add new integrations every month.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-secure-teal hover:bg-secure-teal/90 text-white px-12 py-5 rounded-2xl font-bold transition-opacity"
            >
              Request Integration
            </button>
          </div>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
